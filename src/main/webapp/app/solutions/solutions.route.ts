import { Route } from '@angular/router';

import { SolutionsComponent } from './';

export const solutionsRoute: Route = {
    path: 'solutions',
    component: SolutionsComponent,
    data: {
        authorities: [],
        pageTitle: 'solutions.title'
    }
};
