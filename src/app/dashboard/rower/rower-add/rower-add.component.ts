import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Rower, RowersService } from '../services/rowers.service';
import { RowerDetailComponent } from '../shared/rower-detail/rower-detail.component';

@Component({
  selector: 'app-rower-add',
  templateUrl: './rower-add.component.html',
  styleUrls: ['./rower-add.component.css']
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

  onSubmit(formGroup: FormGroup) {
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
