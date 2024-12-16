import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonTitle, IonImg, IonSelect, IonSelectOption,IonIcon, IonApp } from '@ionic/angular/standalone';
import { homeOutline, locationOutline, ticketOutline, heartOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'location-outline': locationOutline,
});

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonButtons, IonTitle, IonImg, IonSelect, IonSelectOption, IonIcon, IonApp],
})
export class NavbarComponent  implements OnInit {

  constructor() {
      addIcons({homeOutline,ticketOutline,heartOutline,personOutline,locationOutline}); }

  ngOnInit() {}

}
