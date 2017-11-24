import { Route } from '@angular/router';

import { ContactComponent } from './';

export const contactRoute: Route = {
    path: 'contact',
    component: ContactComponent,
    data: {
        authorities: [],
        pageTitle: 'contact.title'
    }
};
