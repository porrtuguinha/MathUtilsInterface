import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-derivada',
  standalone: true,
  imports: [FormsModule,
    CommonModule],
  templateUrl: './derivada.component.html',
  styleUrl: './derivada.component.css'
})
export class DerivadaComponent {

  a!: number;
  b!: number;
  c!: number;
  xi!: number;
  resultado!: any;
  constructor( private Router: Router){}
  calcularDerivada() {
    const delta = (this.b * this.b) - (4 * this.a * this.c);
    if (delta >= 0) {
      const yi = (this.a * (this.xi * this.xi)) + (this.b * this.xi) + this.c;
      const x_i = this.xi - 0.01;
      const y_i = (this.a * (x_i * x_i)) + (this.b * x_i) + this.c;
      this.resultado = (yi - y_i) / (this.xi - x_i);
    } else {
      this.resultado = "Coloque outros valores de a, b e c";
    }
  }

  voltar(){
    this.Router.navigate(['']);
  }
}
