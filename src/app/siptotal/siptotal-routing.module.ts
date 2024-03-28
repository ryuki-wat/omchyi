import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiptotalPage } from './siptotal.page';

const routes: Routes = [
  {
    path: '',
    component: SiptotalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiptotalPageRoutingModule {}
