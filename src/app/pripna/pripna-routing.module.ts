import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PripnaPage } from './pripna.page';

const routes: Routes = [
  {
    path: '',
    component: PripnaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PripnaPageRoutingModule {}
