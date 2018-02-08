import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { AngularDraggableModule } from 'angular2-draggable';


import { AppComponent } from './app.component';
import { HomeComponent } from './route-components/home/home.component';
import { STATES } from './app.routes';
import { RecipeModificationComponent } from './route-components/recipe-modification/recipe-modification.component';
import { RecipeTemplateBuilderComponent } from './route-components/recipe-template-builder/recipe-template-builder.component';
import { CraftingSquareComponent } from './crafting-square/crafting-square.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeModificationComponent,
    RecipeTemplateBuilderComponent,
    CraftingSquareComponent
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
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
