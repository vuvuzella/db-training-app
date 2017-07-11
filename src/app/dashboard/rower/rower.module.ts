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
import { RowerAddComponent } from './rower-add/rower-add.component';
import { RowerEditComponent } from './rower-edit/rower-edit.component';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RowerRoutingModule,
    CdkTableModule,
    MdTableModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdSelectModule,
  ],
  declarations: [
    RowerComponent,
    RowerListComponent,
    RowerAddComponent,
    RowerEditComponent
  ],
  providers: [RowersService]
})
export class RowerModule { }
