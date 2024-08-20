import { Component, Input } from '@angular/core';
import { IonIcon,IonHeader,IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[IonIcon,IonHeader,IonToolbar, IonTitle]
})
export class HeaderComponent  {

  @Input() title: string;

  constructor() { }


}
