import "./style.css";
import Experience from "@Experience/Experience.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");
const experience = new Experience(canvas);

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker
//       .register("sw.js")
//       .then(
//         function (registration) {
//           // Registration was successful
//           console.log("Registered!");
//         },
//         function (err) {
//           // registration failed :(
//           console.log("ServiceWorker registration failed: ", err);
//         }
//       )
//       .catch(function (err) {
//         console.log(err);
//       });
//   });
// } else {
//   console.log("service worker is not supported");
// }
