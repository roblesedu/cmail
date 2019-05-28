import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterModule } from './modules/register/register.module';
import { LoginModule } from './modules/login/login.module';
import { InboxModule } from './modules/inbox/inbox.module';
import { RouterModel } from './app-routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    LoginModule,
    InboxModule,
    RouterModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
