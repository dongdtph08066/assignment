import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { DarbroadComponent } from './darbroad/darbroad.component';







const routes: Routes =[
  { path: "", redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  { path: 'product/detail/:id', component: ProductDetailComponent},
 { path: 'manager', component: ManagerComponent},
 {path:"admin", redirectTo: "dashboard", pathMatch: "full"},
 { path: 'dashboard', component: DarbroadComponent},
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }