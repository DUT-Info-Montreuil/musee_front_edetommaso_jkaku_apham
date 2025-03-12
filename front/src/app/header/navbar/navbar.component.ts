import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menus = [
    { label: "Home",route:"/" },
    { label: "Expositions",route:"/exposition" },
    { label: "Oeuvres", routes:""},
    { label: "Artistes", routes:""},
  ];
}
