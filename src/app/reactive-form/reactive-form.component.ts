import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  toggle = false;
  profile = this.formbuilder.group({
    name: ['', Validators.required],
    email: [''],
    mobile: [''],
    designation: [''],
  });
  constructor(private formbuilder: FormBuilder) {
  }
  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profile.value);
    this.toggle = !this.toggle;
  }
}