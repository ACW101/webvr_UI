var AFRAME = require("aframe")
var THREE = AFRAME.THREE
let contentHolderClicked = new CustomEvent('contentHolderClicked', {
  bubbles: true
})

AFRAME.registerComponent("content-holder", {
  schema: {
    color: {type: 'color', default: "pink"},
    width: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 0.01},
    position: {type: 'vec3'},
    content: {type: 'selector'} ,
    segmentsHeight: {type: 'int', default: 1, min: 1},
    segmentsWidth: {type: 'int', default: 1, min: 1},
    segmentsDepth: {type: 'int', default: 1, min: 1},
    src: {type:'selector'}
  },

  multiple: true,

  init: function () {
    var data = this.data;  // refer to schema
    var el = this.el;      // refer to entity
    //var sceneEl = this.sceneEl;   // refer to scene

    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
    var src = this.el.getAttribute('src');
    

    /** this.texture = new THREE.TextureLoader().load();
    this.texture.crossOrigin = "Anonymous";
    this.texture.warpS = THREE.RepeatWrapping;
    this.texture.warpT = THREE.RepeatWrapping;
    this.texture.repeat.set(1, 1);

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: data.color,
      transparent: true,
      opacity: 0.7
      //wireframe: true
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);*/
    this.mesh = new THREE.Mesh(this.geometry);
    this.mesh.position.copy(data.position);

    el.setObject3D('mesh', this.mesh);

    if (src !== null) {
      this.el.setAttribute('material', 'src', src);
    }
    

    el.addEventListener('click', function(event) {
      console.log(event);
      el.dispatchEvent(contentHolderClicked, {
        detail: {entity: el}
      })
    });
  },

  remove: function () {
    this.el.removeObject3D('mesh')
  },

})