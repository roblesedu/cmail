import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './inbox.component';

const routesInbox: Routes = [
  {	path: '',
		component: InboxComponent
	}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routesInbox)
  ],
  exports: [
    RouterModule
  ]
})

export class InboxRoutingMoudeModule { }
