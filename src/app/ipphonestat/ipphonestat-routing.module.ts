import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpphonestatPage } from './ipphonestat.page';

const routes: Routes = [
  {
    path: '',
    component: IpphonestatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpphonestatPageRoutingModule {}
