import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShineSharedModule } from '../shared';

import { contactRoute, ContactComponent } from './';

@NgModule({
    imports: [
        ShineSharedModule,
        RouterModule.forRoot([ contactRoute ], { useHash: true })
    ],
    declarations: [
        ContactComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShineContactModule {}
