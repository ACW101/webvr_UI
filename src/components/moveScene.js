var AFRAME = require("aframe");
AFRAME.registerComponent("move-scene", {
  init: function() {
    this.scene = document.getElementById("appbar");
    console.log("init");
  },
  tick: function() {
    this.scene.object3D.position.z += 0.1;
  }
});
