import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { RowersService } from './services/rowers/rowers.service';
import { Rower } from './services/rowers/rowers.service';

import { RowerModule } from './rower/rower.module';

import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/rowers/mock-rower.service'

import { MdSidenavModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DashboardRoutingModule,
    RowerModule,
    FlexLayoutModule,
    MdSidenavModule,
  ],
  declarations: [
    DashboardComponent,
    SideNavComponent
  ],
  providers: [
    RowersService,
    Rower,
  ]
})
export class DashboardModule { }
