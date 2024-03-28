import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutenscPage } from './routensc.page';

const routes: Routes = [
  {
    path: '',
    component: RoutenscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutenscPageRoutingModule {}
