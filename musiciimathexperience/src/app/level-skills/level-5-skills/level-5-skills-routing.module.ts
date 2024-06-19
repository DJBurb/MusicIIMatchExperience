import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level5SkillsPage } from './level-5-skills.page';

const routes: Routes = [
  {
    path: '',
    component: Level5SkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level5SkillsPageRoutingModule {}
