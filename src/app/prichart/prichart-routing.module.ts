import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrichartPage } from './prichart.page';

const routes: Routes = [
  {
    path: '',
    component: PrichartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrichartPageRoutingModule {}
