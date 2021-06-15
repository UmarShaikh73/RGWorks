
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js';

import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

var scene, camera, renderer, car;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
              40, 
              window.innerWidth / window.innerHeight,
              1,
              5000
              );
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('can'),
  });
  renderer.setSize(document.getElementById('root').clientWidth,450);
  // document.body.appendChild(renderer.domElement);


  var loader = new GLTFLoader();
  
  loader.load('scene.glb',function (gltf) {
    car = gltf.scene;
    car.scale.set(0.4,0.4,0.4);
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });

  scene.background = new THREE.Color(0x000000);

  var light = new THREE.HemisphereLight(0xffffff, 0x000000, 7);
  scene.add(light);
  camera.position.set(0, 0, 17);

  
function animate() { 
  window.requestAnimationFrame(animate);
  var controls = new OrbitControls(camera, renderer.domElement);


  car.rotation.y += 0.008;
  car.rotation.x += 0.008;
  renderer.render(scene, camera);
 
  document.getElementById('up').addEventListener('mouseover', () => {
    // for(var i = car.position.y; i<90; i++){
    //   for(var k = 0 ; k<1000; k++) {
    //     car.rotation.x =+ 1;
    //   }
    //   car.rotation.y =+ i;
    //   car.rotation.x = 0; 
      
    // }
    car.rotation.y = 90;
    car.rotation.x = 0;
  });
  
  document.getElementById('right')
    .addEventListener('mouseover', () => {
      car.rotation.y = 0;
      car.rotation.x = 90;
    });

  document.getElementById('down')
    .addEventListener('mouseover', () => {
      car.rotation.y = 45;
      car.rotation.x = 45;
    });

  document.getElementById('left')
    .addEventListener('mouseover', () => {
      car.rotation.y = 120;
      car.rotation.x = 40;
    });

  document.getElementById('front')
    .addEventListener('mouseover', () => {
      car.rotation.y = 10;
      car.rotation.x = 180;
    });

  document.getElementById('back')
      .addEventListener('mouseover', () => {
        car.rotation.y = 90;
        car.rotation.x = 180;
      });

  }
animate();

