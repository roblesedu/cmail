import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './register.component';
import { RouterModel } from 'src/app/app-routes';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FormGroupModule } from 'src/app/components/form-group/form-group.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModel,  
    HeaderModule,
    FormGroupModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
