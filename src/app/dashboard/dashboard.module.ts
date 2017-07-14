import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { SideNavComponent } from './side-nav/side-nav.component';

import { RowerModule } from './rower/rower.module';

import { HttpModule } from '@angular/http';

// Layouting module
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material components
import { MdSidenavModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DashboardRoutingModule,
    RowerModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdListModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
  ],
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  providers: []
})
export class DashboardModule { }
