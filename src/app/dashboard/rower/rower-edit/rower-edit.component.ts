import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Rower, RowersService } from '../services/rowers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rower-edit',
  templateUrl: './rower-edit.component.html',
  styleUrls: ['./rower-edit.component.css']
})
export class RowerEditComponent implements OnInit {

  private sides: string[] = ['stroke', 'bow', 'timon and pumba', 'drummer'];
  private formData: FormGroup;
  private submitted: Boolean = false;
  private rowerId: string;
  private rowerInfo: Rower;

  constructor(
    private formBuilder: FormBuilder,
    private rowersService: RowersService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.rowerId = this.getParamId();
    console.log(this.rowerId);

    this.actRoute.data
      .subscribe((data: {rower: Rower}) => {
        this.formData = this.formBuilder.group(data.rower);
      })
      .unsubscribe()

  }

  onSubmit(formGroup: FormGroup): void {
    console.log(this.rowerId);
    const updatedRower: Rower = formGroup.value as Rower;
    this.rowersService.updateRower(updatedRower, this.rowerId)
      .then(response => {
        console.log(response);
        this.formData = this.formBuilder.group(response);
      });
  }

  getParamId(): string {
    let id: string;
    this.actRoute.paramMap
      .map(params => params.get('id'))
      .subscribe(rowersId => id = rowersId)
      .unsubscribe();
    return id;
  }

}
