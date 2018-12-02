var AFRAME = require("aframe")
var THREE = AFRAME.THREE

AFRAME.registerComponent("face-towards", {
  schema: {
    target: {type: 'selector'},
    target_position: {type: 'vec3'}
  },

  init: function () {
    this.targetPosition = new THREE.Vector3();
  },

  tick: function (time, timeDelta) {
    var data = this.data;   // refer to schema
    var el = this.el;       // refer to entity
    var targetPosition = this.targetPosition;

    if (data.target == null) {
      targetPosition = data.target_position
    } else {
      targetPosition = data.target.object3D.position;
    }

    var direction = new THREE.Vector3;
    direction.copy(targetPosition).sub(el.object3DMap['mesh'].position);

    //console.log(targetPosition);
    if (time !== null && timeDelta > 0) {
      el.object3D.lookAt(direction);
      
    }
    
  },

})