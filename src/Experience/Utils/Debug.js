import { Pane } from "tweakpane";
import * as EssentialsPlugin from "@tweakpane/plugin-essentials";

export default class Debug {
  constructor() {
    this.active = window.location.hash === "#debug";

    if (this.active) {
      this.pane = new Pane();
      this.pane.registerPlugin(EssentialsPlugin);

      this.tabs = this.pane.addTab({
        pages: [{ title: "Framerate" }, { title: "Info" }],
      });
    }
  }
}
