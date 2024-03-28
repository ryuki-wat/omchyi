import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricpnPage } from './pricpn.page';

const routes: Routes = [
  {
    path: '',
    component: PricpnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricpnPageRoutingModule {}
