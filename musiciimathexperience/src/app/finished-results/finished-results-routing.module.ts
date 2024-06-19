import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedResultsPage } from './finished-results.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishedResultsPageRoutingModule {}
