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
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    ChalkBoardDialogComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    HotToastModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [FractionService, BasicAnswerKeyService, FractionAnswerkeyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
