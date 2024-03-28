import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TtDetailPage } from './tt-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TtDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TtDetailPageRoutingModule {}
