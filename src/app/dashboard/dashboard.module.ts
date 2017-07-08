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

import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DashboardRoutingModule,
    CdkTableModule,
    MdTableModule
  ],
  declarations: [
    DashboardComponent,
    RowerListComponent
  ],
  providers: [
    RowersService,
    Rower,
  ]
})
export class DashboardModule { }
