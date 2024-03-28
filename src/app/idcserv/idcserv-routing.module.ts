import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdcservPage } from './idcserv.page';

const routes: Routes = [
  {
    path: '',
    component: IdcservPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdcservPageRoutingModule {}
