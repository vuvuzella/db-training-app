import { Component, OnInit } from '@angular/core';
// import { MdInputModule } from '@angular/material';
// import { MdButtonModule } from '@angular/material';
// import { MdSelectModule } from '@angular/material';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rower-add',
  templateUrl: './rower-add.component.html',
  styleUrls: ['./rower-add.component.css']
})
export class RowerAddComponent implements OnInit {
  sides: string[] = ['stroke', 'bow', 'timon and pumba', 'drummer'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log('Add rower');
    console.log(value);
  }

}
