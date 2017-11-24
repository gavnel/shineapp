import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShineSharedModule } from '../shared';

import { solutionsRoute, SolutionsComponent } from './';

@NgModule({
    imports: [
        ShineSharedModule,
        RouterModule.forRoot([ solutionsRoute ], { useHash: true })
    ],
    declarations: [
        SolutionsComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShineSolutionsModule {}
