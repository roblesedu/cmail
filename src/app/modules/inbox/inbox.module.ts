import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InboxComponent } from './inbox.component';
import { RouterModel } from 'src/app/app-routes';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    InboxComponent
  ],
  exports: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModel,
    HeaderModule
  ]
})
export class InboxModule { }
