import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesJsComponent } from './particles-js/particles-js.component';
import { NebulaJsComponent } from './nebula-js/nebula-js.component';
import { ThreeJsComponent } from './three-js/three-js.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThreeGlobeComponent } from './three-globe/three-globe.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticlesJsComponent,
    NebulaJsComponent,
    ThreeJsComponent,
    PageNotFoundComponent,
    ThreeGlobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
