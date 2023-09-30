import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  showErrorSnackBar(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 5000,
      horizontalPosition: 'center', 
      verticalPosition: 'bottom', 
      panelClass: ['error-snackbar']
    });
  }

  showSuccessSnackBar(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 5000,
      horizontalPosition: 'center', 
      verticalPosition: 'bottom', 
      panelClass: ['success-snackbar']
    });
  }
}
