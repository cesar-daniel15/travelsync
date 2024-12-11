import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true, // Declare que o componente é standalone
  imports: [IonicModule, RouterModule], // Importe IonicModule e RouterModule
})
export class FooterComponent {}
