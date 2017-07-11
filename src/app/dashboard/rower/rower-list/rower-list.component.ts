import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RowersService } from '../../services/rowers/rowers.service';
import { Rower } from '../../services/rowers/rowers.service';

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
      .then(response => this.rowersList = new ExampleDataSource(response));
    this.urlPath = this.getParentPath();
  }

  delete(): void {
    console.log('delete!')
    this.isDelete = !this.isDelete;
  }

  add(): void {
    this.router.navigate([`${this.urlPath}add`]);
  }

  edit(id: number): void {
    this.router.navigate([`${this.urlPath}edit/` + id]);
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


