import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rower module routing module
import { RowerRoutingModule } from './rower-routing.module';

// Components to be declared
import { RowerListComponent } from './rower-list/rower-list.component';
import { RowerComponent } from './rower.component';
import { RowerAddComponent } from './rower-add/rower-add.component';
import { RowerEditComponent } from './rower-edit/rower-edit.component';
import { RowersService } from './services/rowers.service';

// layout used by this module
import { MdTableModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RowerDetailComponent } from './shared/rower-detail/rower-detail.component';

// Firebase required modules
import { environment } from '../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RowerRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'sag1application'),
    AngularFireDatabaseModule,
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
    RowerEditComponent,
    RowerDetailComponent,
  ],
  providers: [RowersService]
})
export class RowerModule { }
