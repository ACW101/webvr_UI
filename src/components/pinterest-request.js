const request = require('superagent')

var AFRAME = require("aframe")
var THREE = AFRAME.THREE

AFRAME.registerComponent("pinterest-request", {
  schema: {
    url: {type: 'string'},
    target: {type: 'selector'}
  },

  init: function () {
    const pinterestUrl = this.data.url;
    this.dataFromRequest = []
    request
      .get(pinterestUrl)
      .then(res => {
        console.log(res.body)
        this.dataFromRequest = res.body
      });
  },

  update: function (oldData) {
    var newUrl = this.data.url;
    if (newUrl == oldData.url) {
      return
    } else {
      this.init;
    }
  }



})
