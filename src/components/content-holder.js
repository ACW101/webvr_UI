var AFRAME = require("aframe")
var THREE = AFRAME.THREE

AFRAME.registerComponent("content-holder", {
  schema: {
    color: {type: 'color', default: "grey"},
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 0.01},
    position: {type: 'vec3'},
    content: {type: 'selector'} ,
    segmentsHeight: {type: 'int', default: 1, min: 1},
    segmentsWidth: {type: 'int', default: 1, min: 1},
    segmentsDepth: {type: 'int', default: 1, min: 1},
    
  },

  multiple: true,

  init: function () {
    var data = this.data;  // refer to schema
    var el = this.el;      // refer to entity
    //var sceneEl = this.sceneEl;   // refer to scene

    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    

    //this.texture = new THREE.TextureLoader().load('templates/wood.jpg');
    //this.texture.crossOrigin = "Anonymous";
    //this.texture.warpS = THREE.RepeatWrapping;
    //this.texture.warpT = THREE.RepeatWrapping;
    //this.texture.repeat.set(1, 1);

    this.material = new THREE.MeshBasicMaterial({
      color: data.color,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.copy(data.position);

    el.setObject3D('mesh', this.mesh);
  },

  remove: function () {
    this.el.removeObject3D('mesh')
  },

})