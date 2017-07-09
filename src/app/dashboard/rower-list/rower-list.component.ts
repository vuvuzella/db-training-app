import { Component, OnInit } from '@angular/core';

import { RowersService } from '../services/rowers/rowers.service';
import { Rower } from '../services/rowers/rowers.service';

import { MdTableModule } from '@angular/material';

import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject' ;
import { Observable } from 'rxjs/Observable';

import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-rower-list',
  templateUrl: './rower-list.component.html',
  styleUrls: ['./rower-list.component.css']
})
export class RowerListComponent implements OnInit {
  rowersList: ExampleDataSource;
  isDelete: Boolean = false;
  displayedColumns = [
    'id', 'firstName',
    'lastName', 'age',
    'weight', 'side',
    'update', 'delete'
  ];
  constructor(
    private rowersService: RowersService
  ) { }

  ngOnInit() {
    this.rowersService.getRowers()
      .then(response => this.rowersList = new ExampleDataSource(response));
  }

  delete(): void {
    console.log('delete!')
    this.isDelete = !this.isDelete;
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private rowersSource: Rower[]
  ) {
    super();
  }

  connect(): Observable<Rower[]> {
    return new BehaviorSubject<Rower[]>(this.rowersSource);
  }

  disconnect() {}
}


