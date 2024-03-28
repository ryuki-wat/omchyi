import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IpphonePage } from './ipphone.page';

const routes: Routes = [
  {
    path: '',
    component: IpphonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IpphonePageRoutingModule {}
