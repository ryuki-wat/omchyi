import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpcPage } from './spc.page';

const routes: Routes = [
  {
    path: '',
    component: SpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpcPageRoutingModule {}
