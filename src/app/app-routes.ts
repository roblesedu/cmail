import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routesApp: Routes = [
	{	path: '',
		loadChildren: 'src/app/modules/login/login.module#LoginModule'
	},
	{	path: 'login',
		loadChildren: 'src/app/modules/login/login.module#LoginModule'
	},
	{
		path: 'login/:userName',
		loadChildren: 'src/app/modules/login/login.module#LoginModule'
		//recebendo parâmetros numa rota /:nomeParametro
	},
	{
		path: 'inbox',
		loadChildren: 'src/app/modules/inbox/inbox.module#InboxModule'
	},
	{
		path: 'register',
		loadChildren: 'src/app/modules/register/register.module#RegisterModule'
	},
	{
		path: '**',
		redirectTo: ''
	}
]

//transforma numa classe padronizada e importa/exporta o RouterModule como uma classe configurável
@NgModule({
	imports: [
		RouterModule.forRoot(routesApp)
	],
	exports: [
		RouterModule
	]
})
export class RouterModel {}