import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { homeOutline, locationOutline, ticketOutline, heartOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'home-outline': homeOutline,
  'ticket-outline': ticketOutline,
  'heart-outline': heartOutline,
  'person-outline': personOutline,
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true, // Declare que o componente é standalone
  imports: [IonicModule, RouterModule], // Importe IonicModule e RouterModule
})
export class FooterComponent {}
