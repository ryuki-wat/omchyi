import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ltgnsc2Page } from './ltgnsc2.page';

const routes: Routes = [
  {
    path: '',
    component: Ltgnsc2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ltgnsc2PageRoutingModule {}
