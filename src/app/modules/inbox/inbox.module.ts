import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InboxComponent } from './inbox.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { InboxRoutingMoudeModule } from './inbox-routing.module';

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
    HeaderModule,
    InboxRoutingMoudeModule
  ]
})
export class InboxModule { }
