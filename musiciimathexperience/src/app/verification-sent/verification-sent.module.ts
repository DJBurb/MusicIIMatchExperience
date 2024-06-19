import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationSentPageRoutingModule } from './verification-sent-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationSentPageRoutingModule
  ]
})
export class VerificationSentPageModule {}
