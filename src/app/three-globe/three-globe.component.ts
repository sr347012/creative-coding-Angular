import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
// import * as vertexShader from './../../shaders/vertex.glsl';

@Component({
  selector: 'app-three-globe',
  templateUrl: './three-globe.component.html',
  styleUrls: ['./three-globe.component.css']
})
export class ThreeGlobeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // var speedX = 0.01;
    var canvasQuery = document.querySelector('canvas') as HTMLCanvasElement;

    var renderer = new THREE.WebGLRenderer({
      antialias: true, canvas: canvasQuery
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // document.body.appendChild(renderer.domElement);

      //============================================================
      var earthGeometry = new THREE.SphereGeometry(5, 50, 50);
      var earthMaterial = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/earth2.jpg')
      });
      var earth = new THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);
      //=============================================================
      var sunGeometry = new THREE.SphereGeometry(5, 50, 50);
      var sunMaterial = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/sun.jpg')
      });
      var sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun);
      //=============================================================
      //=============================================================
      var mercuryGeometry = new THREE.SphereGeometry(2, 50, 20);
      var mercuryMaterial = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/mercury.jpg')
      });
      var mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
      scene.add(mercury);
      //=============================================================
      var venusGeometry = new THREE.SphereGeometry(4, 50, 50);
      var venusMaterial = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/venus.jpg')
      });
      var venus = new THREE.Mesh(venusGeometry, venusMaterial);
      scene.add(venus);
      //=============================================================
      var mars = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
      new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/mars.jpg')
      }));
      scene.add(mars);
      //=============================================================
      var saturn = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
      new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/saturn.jpg')
      }));
      const saturnRing = new THREE.Mesh( new THREE.RingGeometry( 3, 5, 32 ),
      new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/saturn_ring.png')
      }) );
      scene.add( saturnRing );
      scene.add(saturn);
      //=============================================================
      var jupiter = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
      new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/jupiter.jpg')
      }));
      scene.add(jupiter);      
      //=============================================================
      var uranus = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
      new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/uranus.jpg')
      }));
      scene.add(uranus);
      //=============================================================
      var neptune = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), 
      new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load('./assets/neptune.jpg')
      }));
      scene.add(neptune);      
      //=============================================================
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({color: 0xffffff});
      var starVertices = [];
      for (let i=0; i<1000; i++) {
        const x = (Math.random() - 0.5) *500;
        const y = (Math.random() - 0.5) *200;
        const z = -Math.random() *1000 ;
         starVertices.push(x,y,z);
      }
      // console.log(starVertices);
      starGeometry.setAttribute('position', 
      new THREE.Float32BufferAttribute(starVertices, 3));

      var stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);      
      //=============================================================
    camera.position.z = 30;

    var animate = function () {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.00001;
      stars.rotation.x += 0.00001;

      sun.position.set(-20,0,25);
      sun.scale.set(2,2.5,2);

      mercury.position.set(-25,0,0);
      mercury.scale.set(-0.5,-0.5,-0.5)

      venus.position.set(-37,0,-25);
      earth.position.set(-20,0,-15);

      mars.position.set(-10,0,-20);

      jupiter.position.set(3,0,1);
      // jupiter.scale.set(0.4,0.6,0.5);
      saturn.position.set(22,0,-7)

      saturnRing.position.set(20,0,-3);
      saturnRing.rotation.set(-1,0.2,-0.3);
      saturnRing.scale.set(2.1,1,1);

      uranus.position.set(60,0,-25);
      uranus.scale.set(1,1.2,1);

      neptune.position.set(180,0,-100);
      neptune.scale.set(1,1.2,1);

      earth.rotation.y += 0.01;
      sun.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    const mouse = {
      x: 0,
      y: 0
    }
    window.addEventListener('mousemove', (event)=> {
      mouse.x = (event?.clientX/window.innerWidth) * 2 -1;
      mouse.y = (event?.clientY/window.innerHeight) * 2 - 1;
      console.log(event);
    })
  
  }

}
