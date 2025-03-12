import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})
export class CopyrightComponent {
  année: number = new Date().getFullYear();
  entreprise:string = "Boston Company";
  info: string = `© ${this.année} ${this.entreprise}. Tous droits réservés.`;
}
