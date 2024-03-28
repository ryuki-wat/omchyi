import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NscSelectPage } from './nsc-select.page';

const routes: Routes = [
  {
    path: '',
    component: NscSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NscSelectPageRoutingModule {}
