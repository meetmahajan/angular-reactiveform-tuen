import { Component } from '@angular/core';
export type FormTypeElement = 'formFill' | 'formDetails';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  form_type_element : FormTypeElement;

  constructor() {
  }
  ngOnInit() {
  }
  showFormFill(){
    return this.form_type_element === 'formFill';
  }
  showFormDetails(){
    return this.form_type_element === 'formDetails';
  }
  reactiveForm(type) {
    this.form_type_element = type;
  }
}
