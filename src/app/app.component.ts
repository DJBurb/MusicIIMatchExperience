import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { InventoryComponent } from './components/inventory/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Music 2 Math Experience';
  isAuthenticated: boolean;
  isVerified: boolean;

  constructor(private router: Router, private afAuth: AngularFireAuth, private inventoryDialog: MatDialog){

  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.isAuthenticated = !!user;
      if(this.isAuthenticated && user?.emailVerified){
        this.isVerified=true;
      }
    });
  }
  logOut(){
    this.afAuth.signOut().then(() => {
      this.isAuthenticated = false;
      this.router.navigateByUrl('login');
    });
  }

  isCurrentPageLogin(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('/login');
  }

  showInventory(){
    this.inventoryDialog.open(InventoryComponent,{
      width: '700px',
      height:'700px'
    });
  }
}
