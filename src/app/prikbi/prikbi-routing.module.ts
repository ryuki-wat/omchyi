import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikbiPage } from './prikbi.page';

const routes: Routes = [
  {
    path: '',
    component: PrikbiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikbiPageRoutingModule {}
