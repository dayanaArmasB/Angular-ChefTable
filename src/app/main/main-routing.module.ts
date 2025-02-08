import { NgModule } from '@angular/core';
// import { LayoutpageComponent } from './layoutpage/layoutpage.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductAppComponent } from './products/product-app/product-app.component';

const routes: Routes = [
   { path: '', component: ProductAppComponent },
  //  { path: 'home', component: ProductAppComponent, canActivate: [AuthGuard] },
  //  { path: '**', redirectTo: '' }
 ];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }


 