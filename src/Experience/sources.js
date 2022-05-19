export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "../public/textures/environmentMap/px.jpg",
      "../public/textures/environmentMap/nx.jpg",
      "../public/textures/environmentMap/py.jpg",
      "../public/textures/environmentMap/ny.jpg",
      "../public/textures/environmentMap/pz.jpg",
      "../public/textures/environmentMap/nz.jpg",
    ],
  },
  {
    name: "dirtColorTexture",
    type: "texture",
    path: "../public/textures/dirt/color.jpg",
  },
  {
    name: "dirtNormalTexture",
    type: "texture",
    path: "../public/textures/dirt/normal.jpg",
  },
  {
    name: "foxModel",
    type: "gltfModel",
    path: "../public/models/fox/glTF/Fox.gltf",
  },
];
