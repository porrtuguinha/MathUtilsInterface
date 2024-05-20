import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lancamento-horizontal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lancamento-horizontal.component.html',
  styleUrl: './lancamento-horizontal.component.css'
})
export class LancamentoHorizontalComponent {
  velocidadeInicial!: number; 
  angulo!: number; 
  alcancehorizontal!: number; 
  grvidade!: number;
  resultado!: any;
  constructor( private router: Router){}
  calcular() {
  
    const radianAngle = this.angulo * (Math.PI / 180); // Converter ângulo para radianos
    this.alcancehorizontal = (Math.pow(this.velocidadeInicial, 2) * Math.sin(2 * radianAngle)) / this.grvidade;
    this.resultado ="O alcance horizontal é: " + this.alcancehorizontal + " metros"
  }
  voltar(){
    this.router.navigate(['']);
  }
}
