import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { DashboardModule } from './dashboard/dashboard.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module'

// Application-wide Module imports
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, // Entry component for future modules to be added to this web app
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    // Root routes, followed by other modules with internal routes
    AppRoutingModule,
    // DashboardModule,

    FlexLayoutModule,
    MaterialModule,
    MdToolbarModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
