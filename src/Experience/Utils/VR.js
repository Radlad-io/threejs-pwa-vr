import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import Experience from "@Experience/Experience.js";

export default class VR {
  constructor() {
    this.experience = new Experience();
    this.renderer = this.experience.renderer;
    document.body.appendChild(VRButton.createButton(this.renderer));
  }
}
