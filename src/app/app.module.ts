import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {STATES} from './app.routes';
import { RecipeModificationComponent } from './recipe-modification/recipe-modification.component';
import { RecipeTemplateBuilderComponent } from './recipe-template-builder/recipe-template-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeModificationComponent,
    RecipeTemplateBuilderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: STATES,
      otherwise: {
        state: 'home'
      },
      useHash: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
