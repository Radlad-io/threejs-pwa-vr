import * as THREE from "three";

import Experience from "@Experience/Experience.js";
import Enviorment from "@World/Enviorment.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    console.log(this.scene);

    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    );

    this.scene.add(testMesh);

    // Setup
    this.enviorment = new Enviorment();
  }
}
