import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectPage } from './elect.page';

const routes: Routes = [
  {
    path: '',
    component: ElectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectPageRoutingModule {}
