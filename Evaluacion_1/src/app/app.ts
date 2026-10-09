import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomponente } from './components/headercomponente/headercomponente';
import { Maincomponente } from './componenets/maincomponente/maincomponente';

@Component({
  imports: [RouterOutlet, Headercomponente, Maincomponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Evaluacion_1');
}
