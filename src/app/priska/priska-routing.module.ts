import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriskaPage } from './priska.page';

const routes: Routes = [
  {
    path: '',
    component: PriskaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriskaPageRoutingModule {}
