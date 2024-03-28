import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectSelectPage } from './elect-select.page';

const routes: Routes = [
  {
    path: '',
    component: ElectSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectSelectPageRoutingModule {}
