import * as THREE from "three";
import Experience from "@Experience/Experience.js";

export default class Fox {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.pane.addFolder({
        title: "Fox",
        expanded: true,
      });
    }

    this.resource = this.resources.items.foxModel;

    this.setModel();
    this.setAnimation();
    this.initDebug();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.02, 0.02, 0.02);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  setAnimation() {
    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(this.model);
    this.animation.actions = {};
    this.animation.actions.idle = this.animation.mixer.clipAction(
      this.resource.animations[0]
    );
    this.animation.actions.walking = this.animation.mixer.clipAction(
      this.resource.animations[1]
    );
    this.animation.actions.running = this.animation.mixer.clipAction(
      this.resource.animations[2]
    );
    this.animation.actions.current = this.animation.actions.idle;
    this.animation.actions.current.play();

    this.animation.play = (name, duration) => {
      const newAction = this.animation.actions[name];
      const oldAction = this.animation.actions.current;

      if (newAction === oldAction) {
        return;
      }

      newAction.reset();
      newAction.play();
      newAction.crossFadeFrom(oldAction, duration);

      this.animation.actions.current = newAction;
    };
  }

  initDebug() {
    if (this.debug.active) {
      const animations = {
        playIdle: () => {
          this.animation.play("idle", 1);
        },
        playWalking: () => {
          this.animation.play("walking", 1);
        },
        playRunning: () => {
          this.animation.play("running", 0.5);
        },
      };

      this.buttons = {
        idle: this.debug.pane.addButton({
          title: "Play",
          label: "Idle", // optional
        }),
        walk: this.debug.pane.addButton({
          title: "Play",
          label: "Walk", // optional
        }),
        run: this.debug.pane.addButton({
          title: "Play",
          label: "Run", // optional
        }),
      };
      this.buttons.idle.on("click", animations.playIdle);
      this.buttons.walk.on("click", animations.playWalking);
      this.buttons.run.on("click", animations.playRunning);
    }
  }

  update() {
    this.animation.mixer.update(this.time.delta / 1000);
  }
}
