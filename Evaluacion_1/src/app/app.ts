import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponente } from './components/aside-componente/aside-componente';
import { FooterComponente } from './components/footer-componente/footer-componente';
import { Headercomponente } from './components/headercomponente/headercomponente';
import { Maincomponente } from './components/maincomponente/maincomponente';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AsideComponente,
    FooterComponente,
    Headercomponente,
    Maincomponente
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Evaluacion_1');
}