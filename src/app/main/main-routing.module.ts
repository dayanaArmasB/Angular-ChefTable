import { NgModule } from '@angular/core';
// import { LayoutpageComponent } from './layoutpage/layoutpage.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisitUsComponent } from './visit-us/visit-us.component';
import { ProductAppComponent } from './products/product-app/product-app.component';


const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'visit-us', component: VisitUsComponent },
  { path: 'index', component: ProductAppComponent },
  { path: '**', redirectTo: 'index' }  
];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }


 