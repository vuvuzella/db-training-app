import { Component, OnInit } from '@angular/core';

import { RowersService } from '../services/rowers/rowers.service';
import { Rower } from '../services/rowers/rowers.service';

@Component({
  selector: 'app-rower-list',
  templateUrl: './rower-list.component.html',
  styleUrls: ['./rower-list.component.css']
})
export class RowerListComponent implements OnInit {
  rowersList: Rower[];
  constructor(
    private rowersService: RowersService
  ) { }

  ngOnInit() {
    this.rowersService.getRowers()
      .then(response => this.rowersList = response);
  }

}
