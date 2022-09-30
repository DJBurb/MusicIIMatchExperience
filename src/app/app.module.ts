import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FractionService } from './services/fractions.service';
import { BasicAnswerKeyService } from './services/answerKey/basicAnswerKey.service';
import { FractionAnswerkeyService } from './services/answerKey/fractionAnswerKey.service';
import { ChalkBoardDialogComponent } from './chalk-board-dialog/chalk-board-dialog.component';
import { SceneComponent } from './scene/scene.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ChalkBoardDialogComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule

  ],
  providers: [FractionService, BasicAnswerKeyService, FractionAnswerkeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
