import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
	//  {
	//  	path: '',
	// 	component: LoginComponent
	//  },
	//  {
	// 	path: 'login',
	//    component: LoginComponent
	//  },
	//  {
	//  	path: 'register',
	//  	component: NavigatorRegisterComponent
	//  },

	// { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)},
	// { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },
	// // { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
	// { path: '**', component: PagenofoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
