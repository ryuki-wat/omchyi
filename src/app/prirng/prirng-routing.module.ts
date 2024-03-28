import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrirngPage } from './prirng.page';

const routes: Routes = [
  {
    path: '',
    component: PrirngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrirngPageRoutingModule {}
