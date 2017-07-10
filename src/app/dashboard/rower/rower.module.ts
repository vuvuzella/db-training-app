import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowerRoutingModule } from './rower-routing.module';
import { RowerListComponent } from './rower-list/rower-list.component';
import { RowerComponent } from './rower.component';
import { RowersService } from '../services/rowers/rowers.service';

// layout
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RowerRoutingModule,
    CdkTableModule,
    MdTableModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
  ],
  declarations: [
    RowerComponent,
    RowerListComponent
  ],
  providers: [RowersService]
})
export class RowerModule { }
