import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RowersService } from '../services/rowers.service';
import { Rower } from '../services/rowers.service';

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
  private urlPath: string;
  sampleDb: ExampleDatabase;
  displayedColumns = [
    'id', 'firstName',
    'lastName', 'age',
    'weight', 'side',
    'update', 'delete'
  ];
  constructor(
    private rowersService: RowersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.rowersService.getRowers()
      .then(response => this.rowersList = new ExampleDataSource(this.sampleDb = new ExampleDatabase(response)));
    this.urlPath = this.getParentPath();
  }

  delete(rowerId: number, index: number): void {
    this.rowersService.deleteRower(rowerId)
      .then(() => this.sampleDb.delete(index))
  }

  add(): void {
    this.router.navigate([`${this.urlPath}add`]);
  }

  edit(id: number): void {
    this.router.navigate([`${this.urlPath}edit/`, id]);
  }

  getParentPath(): string {
    let urlPath = '';
    this.activatedRoute.parent.pathFromRoot
      .map((actRoute: ActivatedRoute) =>
        actRoute.url.
          subscribe((val) => urlPath += val.length ? val[0].path + '/' : '' )
          .unsubscribe())
    return urlPath;
  }

}

// TODO: PUT THESE INTO THEIR RESPECTIVE SERVICES!!!
export class ExampleDatabase {
  datachange: BehaviorSubject<Rower[]> = new BehaviorSubject<Rower[]>([]);
  get data(): Rower[] {
    return this.datachange.value;
  }

  constructor(
    rowerArray: Rower[]
  ) {
    const newData = this.data.concat(rowerArray);
    this.datachange.next(newData);
  }

  delete(rowerId: number): void {
    this.data.splice(rowerId, 1);
    this.datachange.next(this.data);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private sampleDb: ExampleDatabase
  ) {
    super();
  }

  connect(): Observable<Rower[]> {
    return this.sampleDb.datachange;
  }

  disconnect() {}
}


