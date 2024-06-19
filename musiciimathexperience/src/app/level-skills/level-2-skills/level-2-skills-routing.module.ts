import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level2SkillsPage } from './level-2-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level2SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level2SkillsPageRoutingModule {}
