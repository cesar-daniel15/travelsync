import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButtons, IonImg, IonSelect, IonSelectOption, } from '@ionic/angular/standalone';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonImg, IonSelect, IonSelectOption, FooterComponent],
})
export class HomePage {
  constructor() {}
}
