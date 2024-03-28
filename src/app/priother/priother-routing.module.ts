import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriotherPage } from './priother.page';

const routes: Routes = [
  {
    path: '',
    component: PriotherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriotherPageRoutingModule {}
