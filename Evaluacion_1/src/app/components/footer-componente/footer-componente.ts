import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-componente',
  standalone: true,
  imports: [],
  templateUrl: './footer-componente.html',
  styleUrl: './footer-componente.css'
})
export class FooterComponente {
  anioActual = new Date().getFullYear();
}