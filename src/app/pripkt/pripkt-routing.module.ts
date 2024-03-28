import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PripktPage } from './pripkt.page';

const routes: Routes = [
  {
    path: '',
    component: PripktPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PripktPageRoutingModule {}
