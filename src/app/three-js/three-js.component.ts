import {
  AfterViewInit,
  ElementRef,
  ViewChild,
  Component,
  OnInit,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-js',
  templateUrl: './three-js.component.html',
  styleUrls: ['./three-js.component.css'],
})
export class ThreeJsComponent implements OnInit {
  // threeJs: any;
  
  @ViewChild('threeJs') public threeJs:
    | ElementRef
    | undefined;

  // renderer: any;

  constructor() {}

  ngOnInit(): void {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // var speedX = 0.01;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    // console.log(this.threeJs);
    // this.threeJs?.nativeElement.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 , wireframe: true});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame(animate);
      // console.log(cube.position, window.innerWidth);
      // if (cube.position.x <= 5) {
      //   cube.position.x = cube.position.x + speedX;
      // }  else {
      //   cube.position.x = cube.position.x - 2 * speedX;
      // }


      
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
}
