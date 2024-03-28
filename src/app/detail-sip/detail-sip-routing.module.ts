import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSipPage } from './detail-sip.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSipPageRoutingModule {}
