import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {

  @Input() infos: any[] = [];

  userFormGroup: FormGroup | undefined;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    /*
    this.userFormGroup = this.formBuilder.group(
      'firstname': [null, Validators.required]
    )
    */
  }

}
