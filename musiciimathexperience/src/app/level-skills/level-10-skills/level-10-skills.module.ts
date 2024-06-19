import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level10SkillsPageRoutingModule } from './level-10-skills-routing.module';

import { Level10SkillsPage } from './level-10-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level10SkillsPageRoutingModule
  ],
  declarations: [Level10SkillsPage]
})
export class Level10SkillsPageModule {}
