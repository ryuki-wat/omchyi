import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ltgnsc1Page } from './ltgnsc1.page';

const routes: Routes = [
  {
    path: '',
    component: Ltgnsc1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ltgnsc1PageRoutingModule {}
