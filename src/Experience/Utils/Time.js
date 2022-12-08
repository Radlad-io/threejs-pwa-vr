import EventEmitter from "@Utils/EventEmitter";
import Experience from "@Experience/Experience.js";

export default class Time extends EventEmitter {
  constructor() {
    super();

    //  Setup
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    // initial delta starts at 1/60 fps to avoide bugs
    this.delta = 16;

    // Stats
    this.experience = new Experience();
    this.debug = this.experience.debug;
    this.initDebug();

    // waits 1 frame to start tick sequence
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  initDebug() {
    if (this.debug.active) {
      this.fpsGraph = this.debug.pane.addBlade({
        view: "fpsgraph",
        label: "Framerate",
        lineCount: 2,
      });
    }
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      if (this.debug.active) {
        this.fpsGraph.begin();
        this.tick();
        this.fpsGraph.end();
      } else {
        this.tick();
      }
    });
  }
}
