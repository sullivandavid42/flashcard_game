import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatistiquesComponent } from './statistiques.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StatistiquesComponent
  }
];

@NgModule({
  declarations: [StatistiquesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class StatistiquesModule { }
