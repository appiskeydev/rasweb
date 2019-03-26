import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatRadioModule, MatDatepickerModule, MatDialogModule, MatTableModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { FakeDbService } from 'app/fakedb/fake-db.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,

        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
      

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),


        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatDatepickerModule,
        MatDialogModule,
        MatTableModule,


        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,

        // App modules


        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        // KeycloakAngularModule,
        AppRoutingModule,

        // App modules
        LayoutModule,
    ],
    // providers: [
    //     {
    //         provide: APP_INITIALIZER,
    //         useFactory: initializer,
    //         multi: true,
    //         deps: [KeycloakService]
    //     }


    // ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
