import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level10SkillsPage } from './level-10-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level10SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level10SkillsPageRoutingModule {}
