/**
 * Created by SB004 on 4/4/2017.
 */
import { ModuleWithProviders,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home-component.component'
export const appRoutes: Routes = [
  { path: '/home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
*/
