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

    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    // waits 1 frame to start tick sequence
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
