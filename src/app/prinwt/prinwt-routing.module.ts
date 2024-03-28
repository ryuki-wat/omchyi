import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrinwtPage } from './prinwt.page';

const routes: Routes = [
  {
    path: '',
    component: PrinwtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinwtPageRoutingModule {}
