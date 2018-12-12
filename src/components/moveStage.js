var AFRAME = require("aframe");
AFRAME.registerComponent("move-stage", {
  init: function() {
    this.stage = document.getElementById("stage");
  },
  tick: function() {
    this.stage.object3D.position.z =
      (this.stage.object3D.position.z + 0.01) % 5;
  }
});
