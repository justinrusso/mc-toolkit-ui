import { Ng2StateDeclaration } from '@uirouter/angular';

import { HomeComponent } from './route-components/home/home.component';
import {RecipeModificationComponent} from './route-components/recipe-modification/recipe-modification.component';
import {RecipeTemplateBuilderComponent} from './route-components/recipe-template-builder/recipe-template-builder.component';

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
