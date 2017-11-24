import { Route } from '@angular/router';

import { ShineComponent } from './';

export const shineRoute: Route = {
    path: 'shine',
    component: ShineComponent,
    data: {
        authorities: [],
        pageTitle: 'shine.title'
    }
};
