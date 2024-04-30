import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-equacao-segundo-grau',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './equacao-segundo-grau.component.html',
  styleUrl: './equacao-segundo-grau.component.css'
})

export class EquacaoSegundoGrauComponent {
   a!: any;
   b!: any;
   c!: any;
  resultado: any
  constructor( private Router: Router){}
  calcular() {
    
    // Verifica se 'a' é diferente de zero
    const delta: number = (this.b * this.b) - 4 * this.a * this.c;

    if (delta > 0) {
        const x1: number = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        const x2: number = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        this.resultado = "As raízes da equação são: x1 = " + x1 + " e x2 = " + x2
    } else if (delta == 0) {
        const x: number = -this.b / (2 * this.a);
        this.resultado = "A equação possui uma raiz real: x = " + x;
    } else {
        this.resultado = "A equação não possui raízes reais.";
    }
}
voltar(){
  this.Router.navigate(['']);
}
}
