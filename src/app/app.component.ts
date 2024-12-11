import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { FooterComponent } from './footer/footer.component'; // Importação do Footer

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, FooterComponent], // Adicione o FooterComponent aqui
})
export class AppComponent {
  constructor() {}
}
