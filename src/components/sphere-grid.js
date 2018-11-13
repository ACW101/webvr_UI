var AFRAME = require("aframe")
var THREE = AFRAME.THREE

AFRAME.registerComponent("sphere-grid", {
  schema: {
    color: {type: 'color', default: "blue"},
    radius: {type: 'number', default: 1, min: 0.0},
    segmentsHeight: {type: 'int', default: 18, min: 2},
    segmentsWidth: {type: 'int', default: 36, min: 3},
  },

  init: function () {
    var data = this.data;  // refer to schema
    var el = this.el;  // refer to entity

    this.geometry = new THREE.SphereBufferGeometry(data.radius, data.segmentsHeight, data.segmentsWidth);
    

    this.texture = new THREE.TextureLoader().load('templates/wood.jpg');
    //this.texture.crossOrigin = "Anonymous";
    this.texture.warpS = THREE.RepeatWrapping;
    this.texture.warpT = THREE.RepeatWrapping;
    this.texture.repeat.set(1, 1);

    this.material = new THREE.MeshBasicMaterial({
      color: data.color,
      map: this.texture
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.copy(el.getAttribute('position'));

    el.setObject3D('mesh', this.mesh);
  }
}

)