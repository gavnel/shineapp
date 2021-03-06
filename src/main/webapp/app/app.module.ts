import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { ShineSharedModule, UserRouteAccessService } from './shared';
import { ShineHomeModule } from './home/home.module';
import { ShineAdminModule } from './admin/admin.module';
import { ShineAccountModule } from './account/account.module';
import { ShineEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here
import { ShineSolutionsModule } from './solutions/solutions.module';
import { ShineAboutUsModule } from './shine/shine.module';
import { ShineContactModule } from './contact/contact.module';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        ShineSharedModule,
        ShineHomeModule,
        ShineAdminModule,
        ShineAccountModule,
        ShineEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        ShineSolutionsModule,
        ShineAboutUsModule,
        ShineContactModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class ShineAppModule {}
