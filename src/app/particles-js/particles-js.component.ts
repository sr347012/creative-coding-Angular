import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './../particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-particles-js',
  templateUrl: './particles-js.component.html',
  styleUrls: ['./particles-js.component.css']
})
export class ParticlesJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.invokeParticles();
  }

  invokeParticles() {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
