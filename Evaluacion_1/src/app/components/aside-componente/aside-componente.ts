import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-componente',
  standalone: true,
  imports: [],
  templateUrl: './aside-componente.html',
  styleUrl: './aside-componente.css'
})
export class AsideComponente {
  requisitos = [
    'DNI o Carné de Extranjería vigente',
    'Ficha de matrícula en línea',
    'Comprobante de pago del ciclo',
    'Examen de clasificación (opcional)'
  ];

  beneficios = [
    'Certificación progresiva internacional',
    'Docentes nativos y certificados',
    'Plataforma virtual de aprendizaje 24/7',
    'Descuento especial para la comunidad UC'
  ];
}