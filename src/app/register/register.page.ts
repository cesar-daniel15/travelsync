import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    IonButton,
    IonImg // Importação adicionada aqui
  ]
})
export class RegisterPage {
  constructor() {}
}
