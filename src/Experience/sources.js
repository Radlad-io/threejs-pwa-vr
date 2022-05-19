export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "./textures/environmentMap/px.jpg",
      "./textures/environmentMap/nx.jpg",
      "./textures/environmentMap/py.jpg",
      "./textures/environmentMap/ny.jpg",
      "./textures/environmentMap/pz.jpg",
      "./textures/environmentMap/nz.jpg",
    ],
  },
  {
    name: "dirtColorTexture",
    type: "texture",
    path: "./textures/dirt/color.jpg",
  },
  {
    name: "dirtNormalTexture",
    type: "texture",
    path: "./textures/dirt/normal.jpg",
  },
  {
    name: "foxModel",
    type: "gltfModel",
    path: "./models/Fox/glTF/Fox.gltf",
  },
];

// import pxTexture from "./Assets/textures/environmentMap/px.jpg";
// import nxTexture from "./Assets/textures/environmentMap/nx.jpg";
// import pyTexture from "./Assets/textures/environmentMap/py.jpg";
// import nyTexture from "./Assets/textures/environmentMap/ny.jpg";
// import pzTexture from "./Assets/textures/environmentMap/pz.jpg";
// import nzTexture from "./Assets/textures/environmentMap/nz.jpg";

// import colorTexture from "./Assets/textures/dirt/color.jpg";
// import normalTexture from "./Assets/textures/dirt/normal.jpg";

// import foxGLTF from "./Assets/models/Fox/glTF/Fox.gltf";

// export default [
//   {
//     name: "environmentMapTexture",
//     type: "cubeTexture",
//     path: [pxTexture, nxTexture, pyTexture, nyTexture, pzTexture, nzTexture],
//   },
//   {
//     name: "dirtColorTexture",
//     type: "texture",
//     path: colorTexture,
//   },
//   {
//     name: "dirtNormalTexture",
//     type: "texture",
//     path: normalTexture,
//   },
//   {
//     name: "foxModel",
//     type: "gltfModel",
//     path: foxGLTF,
//   },
// ];
