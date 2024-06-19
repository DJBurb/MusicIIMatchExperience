import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level6SkillsPage } from './level-6-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level6SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level6SkillsPageRoutingModule {}
