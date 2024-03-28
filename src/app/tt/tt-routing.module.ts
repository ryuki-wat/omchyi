import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TtPage } from './tt.page';

const routes: Routes = [
  {
    path: '',
    component: TtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TtPageRoutingModule {}
