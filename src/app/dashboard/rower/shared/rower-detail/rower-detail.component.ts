import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RowersService } from '../../services/rowers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rower-detail',
  templateUrl: './rower-detail.component.html',
  styleUrls: ['./rower-detail.component.css']
})
export class RowerDetailComponent implements OnInit {
  // Transcluded Component!
  @Input() formData: FormGroup;
  @Input() onSubmit: any;
  @Input() sides: string[];
  @Input() rowerId: string;

  public submitted: Boolean = false;

  constructor(
    // should have the same variable name as the 
    // one transcluding this component
    private rowersService: RowersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
