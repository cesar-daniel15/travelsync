import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonSelect, IonSelectOption, IonIcon, IonSearchbar, IonItem, IonLabel } from '@ionic/angular/standalone';
import { NavbarComponent } from '../componentes/navbar/navbar.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { homeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


addIcons({
  'home-outline': homeOutline,
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonSelect, IonSelectOption, IonIcon, IonSearchbar, IonItem, IonLabel, NavbarComponent, FooterComponent],
})
export class HomePage {
  constructor() {}
}