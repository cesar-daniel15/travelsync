import { Component, OnInit } from '@angular/core';
import { IonToolbar, IonButtons, IonTitle, IonImg, IonSelect, IonSelectOption, IonIcon, IonApp, IonFooter, IonTabBar, IonTabButton, IonLabel } from '@ionic/angular/standalone';
import { homeOutline, locationOutline, ticketOutline, heartOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'home-outline': homeOutline,
  'ticket-outline': ticketOutline,
  'heart-outline': heartOutline,
  'person-outline': personOutline,
});


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonButtons, IonTitle, IonImg, IonSelect, IonSelectOption, IonIcon, IonApp, IonFooter, IonTabBar, IonTabButton, IonLabel], 
})
export class FooterComponent  implements OnInit {

  constructor() {
      addIcons({homeOutline,ticketOutline,heartOutline,personOutline}); }

  ngOnInit() {}

}
