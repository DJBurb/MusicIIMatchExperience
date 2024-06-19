import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Level11SkillsPageRoutingModule } from './level-11-skills-routing.module';

import { Level11SkillsPage } from './level-11-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Level11SkillsPageRoutingModule
  ],
  declarations: [Level11SkillsPage]
})
export class Level11SkillsPageModule {}
