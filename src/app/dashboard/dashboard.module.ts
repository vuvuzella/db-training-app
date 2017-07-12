import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { RowerModule } from './rower/rower.module';

import { HttpModule } from '@angular/http';

import { MdSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DashboardRoutingModule,
    RowerModule,
    FlexLayoutModule,
    MdSidenavModule,
  ],
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  providers: []
})
export class DashboardModule { }
