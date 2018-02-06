import { Ng2StateDeclaration } from '@uirouter/angular';

import { HomeComponent } from './home/home.component';

export const STATES: Ng2StateDeclaration[] = [
  {
    name: 'home',
    url: '/',
    views: {
      'app': {
        component: HomeComponent
      }
    }
  }
];
