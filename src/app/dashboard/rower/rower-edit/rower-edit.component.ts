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
  private rowerId: number;
  private rowerInfo: Rower;
  constructor(
    private formBuilder: FormBuilder,
    private rowersService: RowersService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.rowerId);
    // this.rowersService.getRower(this.rowerId)
    //   .then(response => this.rowerInfo = response)
    //   .then(() => {
    //     this.formData = this.formBuilder.group(this.rowerInfo);
    //   });

    this.actRoute.data
      .subscribe((data: {rower: Rower}) => {
        this.formData = this.formBuilder.group(data.rower);
      })
      .unsubscribe()

  }

  onSubmit(): void {
    console.log('Edit submitted');
  }

  getParamId(): number {
    let id: number;
    this.actRoute.paramMap
      .map(params => params.get('id'))
      .subscribe(rowerId => id = +rowerId)
      .unsubscribe();
    return id;
  }

}
