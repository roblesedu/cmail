import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InboxComponent } from './inbox.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { InboxRoutingMoudeModule } from './inbox-routing.module';
import { EmailService } from 'src/app/services/email.services';
import { ListItemComponent } from './list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InboxComponent,
    ListItemComponent
  ],
  exports: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    InboxRoutingMoudeModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class InboxModule { }
