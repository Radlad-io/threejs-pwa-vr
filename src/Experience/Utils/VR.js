import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

export default class VR {
  constructor() {
    this.enabled = window.location.hash === "#vr";
    if (this.enabled) {
      document.body.appendChild(VRButton.createButton(this.renderer));
    }
  }
}
