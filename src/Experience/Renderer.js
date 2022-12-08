import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import Experience from "@Experience/Experience.js";

export default class Renderer {
  constructor() {
    this.vr = window.location.hash === "#vr";
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.debug = this.experience.debug;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.instance.physicallyCorrectLights = true;
    this.instance.outputEncoding = THREE.sRGBEncoding;
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setClearColor("#211d20");
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    if (this.vr) {
      this.instance.xr.enabled = true;
      document.body.appendChild(VRButton.createButton(this.instance));
    }
    console.log(this.instance.info);
    this.initDebug();
  }

  initDebug() {
    if (this.debug.active) {
      // TODO: Need to get the stats working
      const stats = {
        getGeometryCount: () => {
          this.instance.info.memory.geometries;
        },
        getTextureCount: () => {
          this.instance.info.memory.textures;
        },
        getCallCount: () => {
          this.instance.info.render.calls;
        },
        getFrameCount: () => {
          this.instance.info.render.frame;
        },
        getTriangleCount: () => {
          this.instance.info.render.triangles;
        },
      };

      this.params = {
        geometry: this.instance.info.memory.geometries,
        textures: this.instance.info.memory.textures,
        calls: this.instance.info.render.calls,
        frame: this.instance.info.render.frame,
        triangle: this.instance.info.render.triangles,
      };

      this.geometryCount = this.debug.tabs.pages[1].addMonitor(
        this.params,
        "geometry",
        {
          interval: 1000,
          lineCount: 2,
          min: -10,
          max: +10,
        }
      );
      this.textureCount = this.debug.tabs.pages[1].addMonitor(
        this.params,
        "textures",
        {
          interval: 1000,
          lineCount: 2,
          min: -10,
          max: +10,
        }
      );
      this.callCount = this.debug.tabs.pages[1].addMonitor(
        this.params,
        "calls",
        {
          interval: 1000,
          lineCount: 2,
          min: -10,
          max: +10,
        }
      );
      this.frameCount = this.debug.tabs.pages[1].addMonitor(
        this.params,
        "frame",
        {
          interval: 1000,
          lineCount: 2,
          min: -10,
          max: +10,
        }
      );
      this.triangleCount = this.debug.tabs.pages[1].addMonitor(
        this.params,
        "triangle",
        {
          interval: 1000,
          lineCount: 2,
          min: -10,
          max: +10,
        }
      );
      this.geometryCount.on("update", (e) => {
        // console.log(stats.getGeometryCount());
      });
    }
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  update() {
    if (this.vr) {
      this.instance.setAnimationLoop(() => {
        this.instance.render(this.scene, this.camera.instance);
      });
    } else {
      this.instance.render(this.scene, this.camera.instance);
    }
  }
}
