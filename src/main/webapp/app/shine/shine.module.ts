import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShineSharedModule } from '../shared';

import { shineRoute, ShineComponent } from './';

@NgModule({
    imports: [
        ShineSharedModule,
        RouterModule.forRoot([ shineRoute ], { useHash: true })
    ],
    declarations: [
        ShineComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShineAboutUsModule {}
