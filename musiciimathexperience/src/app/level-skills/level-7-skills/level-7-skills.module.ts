import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level7SkillsPageRoutingModule } from './level-7-skills-routing.module';

import { Level7SkillsPage } from './level-7-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level7SkillsPageRoutingModule
  ],
  declarations: [Level7SkillsPage]
})
export class Level7SkillsPageModule {}
