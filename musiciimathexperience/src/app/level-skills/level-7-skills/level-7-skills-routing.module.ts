import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level7SkillsPage } from './level-7-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level7SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level7SkillsPageRoutingModule {}
