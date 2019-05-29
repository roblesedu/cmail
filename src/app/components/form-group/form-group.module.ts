import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group.component';
import { FormFieldDirective } from './form-field.directive';

@NgModule({
  declarations: [
    FormGroupComponent,
    FormFieldDirective
  ],
  exports: [
    FormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FormGroupModule { }
