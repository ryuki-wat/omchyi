import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cot077Page } from './cot077.page';

const routes: Routes = [
  {
    path: '',
    component: Cot077Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cot077PageRoutingModule {}
