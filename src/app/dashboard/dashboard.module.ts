import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RowerListComponent } from './rower-list/rower-list.component';

import { RowersService } from './services/rowers/rowers.service';
import { Rower } from './services/rowers/rowers.service';

import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/rowers/mock-rower.service'

import { FlexLayoutModule } from '@angular/flex-layout';

// layout
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DashboardRoutingModule,
    CdkTableModule,
    MdTableModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent,
    RowerListComponent,
    SideNavComponent
  ],
  providers: [
    RowersService,
    Rower,
  ]
})
export class DashboardModule { }
