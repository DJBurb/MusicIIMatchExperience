import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level1SkillsPage } from './level-1-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level1SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level1SkillsPageRoutingModule {}
