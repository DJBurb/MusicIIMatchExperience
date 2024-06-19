import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level12SkillsPageRoutingModule } from './level-12-skills-routing.module';

import { Level12SkillsPage } from './level-12-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level12SkillsPageRoutingModule
  ],
  declarations: [Level12SkillsPage]
})
export class Level12SkillsPageModule {}
