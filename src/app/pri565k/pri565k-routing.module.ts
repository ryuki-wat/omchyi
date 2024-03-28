import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pri565kPage } from './pri565k.page';

const routes: Routes = [
  {
    path: '',
    component: Pri565kPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pri565kPageRoutingModule {}
