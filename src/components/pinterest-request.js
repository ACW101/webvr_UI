const request = require('superagent');

var AFRAME = require("aframe");

AFRAME.registerComponent("pinterest-request", {
  schema: {
    url: {type: 'string'}
  },

  init: function () {
    const pinterestUrl = this.data.url;
    let pictureUrls;
    let testUrls = [
      'https://i.pinimg.com/564x/a3/86/a3/a386a37882c295cc83bfaa5e8722f41c.jpg',
      'https://i.pinimg.com/564x/ba/93/f4/ba93f44dba18141a2a7b29ab0206953d.jpg',
      'https://i.pinimg.com/564x/d6/f7/62/d6f76266357173f8972f8a217d167ce4.jpg',
      'https://i.pinimg.com/564x/58/b2/e5/58b2e5ea5b6504997aa90c4d59b9fb35.jpg',
      'https://i.pinimg.com/564x/f4/69/47/f46947a0d3c09d2b38d799da8df6d702.jpg'
    ]

    if (testUrls.length !== 0) {
      var assetsEl = document.querySelector('a-assets');
      testUrls.forEach((item, index) => {
        console.log(item);
        var pic = document.createElement('img');
        pic.setAttribute('id', 'pin-data'+index);
        pic.setAttribute('crossorigin', 'anonymous');
        pic.setAttribute('src', item);
        assetsEl.appendChild(pic);
      });

      document.querySelectorAll(".content").forEach((item, index) => {
          item.setAttribute('material', 'src', '#pin-data'+index);
      });
    } else {
      request
      .get(pinterestUrl)
      .then(res => {
        // console.log(res.body);
        var pinterstData = res.body.data;

        pictureUrls = pinterstData.map(
          item => item.image.original.url
        );

        console.log(pictureUrls);

        var assetsEl = document.querySelector('a-assets');
    
        pictureUrls.forEach((item, index) => {
          console.log(item);
          var pic = document.createElement('img');
          pic.setAttribute('id', 'pin-data'+index);
          pic.setAttribute('crossorigin', 'anonymous');
          pic.setAttribute('src', item);
          assetsEl.appendChild(pic);
        });

        document.querySelectorAll(".content").forEach((item, index) => {
          item.setAttribute('material', 'src', '#pin-data'+index);
        });
      });
    }
      
    
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
