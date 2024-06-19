import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level8SkillsPageRoutingModule } from './level-8-skills-routing.module';

import { Level8SkillsPage } from './level-8-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level8SkillsPageRoutingModule
  ],
  declarations: [Level8SkillsPage]
})
export class Level8SkillsPageModule {}
