import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticlesJsComponent } from './particles-js/particles-js.component';
import { NebulaJsComponent } from './nebula-js/nebula-js.component';
import { ThreeJsComponent } from './three-js/three-js.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [  
  { path: 'particlesJs', component: ParticlesJsComponent },
{ path: 'nebulaJs', component: NebulaJsComponent },
{ path: 'threeJs', component: ThreeJsComponent },
{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
