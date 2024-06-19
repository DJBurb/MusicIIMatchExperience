import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationSentPage } from './verification-sent.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationSentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationSentPageRoutingModule {}
