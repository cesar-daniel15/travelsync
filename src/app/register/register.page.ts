import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonIcon,
  IonTextarea,
  IonButton,
  IonImg
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  locateOutline,
  calendarOutline,
  filterOutline,
  locationOutline,
  documentTextOutline,
  gitBranchOutline,
  heartOutline,
  chatbubbleOutline
} from 'ionicons/icons';

addIcons({
  'locate-outline': locateOutline,
  'calendar-outline': calendarOutline,
  'filter-outline': filterOutline,
  'location-outline': locationOutline,
  'document-text-outline': documentTextOutline,
  'git-branch-outline': gitBranchOutline,
  'heart-outline': heartOutline,
  'chatbubble-outline': chatbubbleOutline
});

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonIcon,
    IonTextarea,
    FooterComponent,
    IonButton,
    IonImg // Importação adicionada aqui
  ]
})
export class RegisterPage {
  // Variável para controlar o campo de data
  showDatePicker: boolean = false;

  // Função para alternar a visibilidade do campo de data
  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }
}
