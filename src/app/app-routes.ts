import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { RegisterComponent } from './modules/register/register.component';

const routesApp: Routes = [
	{	path: '',
		component: LoginComponent
	},
	{
		path: 'inbox',
		component: InboxComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
]

export const RouterModel = RouterModule.forRoot(routesApp);