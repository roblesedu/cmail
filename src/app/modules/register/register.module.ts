import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './register.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterService } from 'src/app/services/register.services';
import { FormValidate } from 'src/app/utils/formValidate';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FormGroupModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegisterRoutingModule
  ],
  providers: [
    RegisterService,
    FormValidate
  ]
})
export class RegisterModule { }
