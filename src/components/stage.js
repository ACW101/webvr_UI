var AFRAME = require("aframe");
// const request = require("superagent");
var THREE = AFRAME.THREE;
AFRAME.registerComponent("stage", {
  /**
   * Initial creation and setting of the mesh.
   */
  init: function() {
    var el = this.el;
    const gp = new THREE.Group();
    // Create geometry.
    this.geometry = new THREE.BoxBufferGeometry(10, 0.01, 50);

    // Create material.
    var wallTexture = new THREE.TextureLoader().load("build/assets/wall.jpg");
    var floorTexture = new THREE.TextureLoader().load("build/assets/floor.jpg");
    wallTexture.wrapS = THREE.RepeatWrapping;
    wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set(5, 10);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(5, 10);
    this.material1 = new THREE.MeshStandardMaterial({ map: floorTexture });
    this.material2 = new THREE.MeshStandardMaterial({ map: wallTexture });

    // Create mesh.
    const mesh1 = new THREE.Mesh(this.geometry, this.material1);
    const mesh2 = new THREE.Mesh(this.geometry, this.material2);
    const mesh3 = new THREE.Mesh(this.geometry, this.material2);
    gp.add(mesh1);
    gp.add(mesh2);
    gp.add(mesh3);

    // Position mesh
    mesh2.position.set(5, 5, 0);
    mesh2.rotation.z = Math.PI / 2;
    mesh3.position.set(-5, 5, 0);
    mesh3.rotation.z = Math.PI / 2;

    // Set mesh on entity.
    el.setObject3D("mesh", gp);
  },

  update: function() {
    // Do something when component's data is updated.
  },

  remove: function() {
    // Do something the component or its entity is detached.
  }
  // getPins: () => {
  //   request
  //     .get(
  //       "https://api.pinterest.com/v1/boards/anapinskywalker/wanderlust/pins/?access_token=AujuZBL3HAHyAmItxTsxw6UzByNOFWi0CFnU1DlFVcmxfWBjgwrmgDAAAcNhRWdwf3QgWmUAAAAA&fields=id,link,counts,image,note"
  //     )
  //     .then(data => {
  //       console.log(data);
  //     });
  // }
});
