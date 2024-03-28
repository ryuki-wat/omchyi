import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrinrtPage } from './prinrt.page';

const routes: Routes = [
  {
    path: '',
    component: PrinrtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrinrtPageRoutingModule {}
