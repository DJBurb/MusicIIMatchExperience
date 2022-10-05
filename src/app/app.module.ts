import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FractionService } from './services/fractions.service';
import { BasicAnswerKeyService } from './services/answerKey/basicAnswerKey.service';
import { FractionAnswerkeyService } from './services/answerKey/fractionAnswerKey.service';
import { ChalkBoardDialogComponent } from './chalk-board-dialog/chalk-board-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ChalkBoardDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [FractionService, BasicAnswerKeyService, FractionAnswerkeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
