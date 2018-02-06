import { Ng2StateDeclaration } from '@uirouter/angular';

import { HomeComponent } from './home/home.component';
import {RecipeModificationComponent} from './recipe-modification/recipe-modification.component';
import {RecipeTemplateBuilderComponent} from './recipe-template-builder/recipe-template-builder.component';

export const STATES: Ng2StateDeclaration[] = [
  {
    name: 'home',
    url: '/',
    views: {
      'app': {
        component: HomeComponent
      }
    }
  },
  {
    name: 'recipe-modification',
    url: '/modify-recipes',
    views: {
      'app': {
        component: RecipeModificationComponent
      }
    }
  },
  {
    name: 'recipe-template-builder',
    url: '/recipe-template-builder',
    views: {
      'app': {
        component: RecipeTemplateBuilderComponent
      }
    }
  }
];
