import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishedResultsPageRoutingModule } from './finished-results-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishedResultsPageRoutingModule
  ]
})
export class FinishedResultsPageModule {}
