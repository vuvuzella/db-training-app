import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Rower, RowersService } from '../services/rowers.service';

@Component({
  selector: 'app-rower-add',
  templateUrl: '../shared/rower-add-edit/rower-add-edit.shared.html',
  styleUrls: ['../shared/rower-add-edit/rower-add-edit.shared.css',
  './rower-add.component.css']
})
export class RowerAddComponent implements OnInit {
  private sides: string[] = ['stroke', 'bow', 'timon and pumba', 'drummer'];
  private formData: FormGroup;
  private submitted: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private rowersService: RowersService
  ) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'age': [''],
      'weight': [''],
      'side': ['', Validators.required]
    });
  }

  onSubmit(formGroup: any) {
    this.submitted = true;
    const formValue = formGroup.value;
    const newRower: Rower = new Rower(
      formValue.firstName,
      formValue.lastName,
      formValue.age,
      formValue.weight,
      formValue.side);
    if (formGroup.valid) {
      this.rowersService.addRower(newRower)
        .then(() => console.log('added'));
    } else {
      console.log('Form is invalid')
    }
  }


}
