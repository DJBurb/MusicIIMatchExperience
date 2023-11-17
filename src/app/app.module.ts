import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicProblemSectionComponent } from './components/basic-problem-section/basic-problem-section.component';
import { Level1Component } from './level1/level1.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegistrationComponent } from './register/registration.component';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultsComponent } from './results/results.component';
import {MatTabsModule} from '@angular/material/tabs';
import { InventoryComponent } from './components/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicProblemSectionComponent,
    Level1Component,
    LoginComponent,
    RegistrationComponent,
    ResetPasswordComponent,
    MenuComponent,
    ResultsComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
