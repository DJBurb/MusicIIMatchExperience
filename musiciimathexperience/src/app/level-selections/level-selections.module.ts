import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSelectionsPageRoutingModule } from './level-selections-routing.module';

import { LevelSelectionsPage } from './level-selections.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSelectionsPageRoutingModule
  ]
})
export class LevelSelectionsPageModule {}
