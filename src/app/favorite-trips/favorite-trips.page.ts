import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonSearchbar, 
  IonList, 
  IonItem, 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent,
  IonSelect,
  IonLabel,
  IonSelectOption 
} from '@ionic/angular/standalone';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-favorite-trips',
  templateUrl: './favorite-trips.page.html',
  styleUrls: ['./favorite-trips.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonSearchbar, 
    IonList, 
    IonItem, 
    IonButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent,
    IonSelect,
    IonLabel,
    IonSelectOption,
    FooterComponent 
  ],
})
export class FavoriteTripsPage {
  lugaresFavoritos = ['Lugar 1', 'Lugar 2', 'Lugar 3']; // Exemplo de dados

  acao(lugar: string) {
    console.log('Ação para:', lugar);
    // Adicione a lógica que você deseja executar quando a ação for chamada
  }

  deletar(lugar: string) {
    console.log('Deletar:', lugar);
    // Adicione a lógica para deletar o lugar da lista
    this.lugaresFavoritos = this.lugaresFavoritos.filter(l => l !== lugar);
  }
}