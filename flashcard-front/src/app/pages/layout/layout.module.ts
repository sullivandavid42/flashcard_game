import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'profil',
      loadChildren: '../profil/profil.module#ProfilModule' // add profil link module
    },
    {
      path: 'statistiques',
      loadChildren: '../statistiques/statistiques.module#StatistiquesModule'
    },
    {
      path: 'logout',
      loadChildren: ''
    },
    {
      path: 'categories',
      loadChildren: '../categories/categories.module#CategoriesModule',
    },
    {
      path: 'card',
      loadChildren: ''
    },
  ]
}];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
