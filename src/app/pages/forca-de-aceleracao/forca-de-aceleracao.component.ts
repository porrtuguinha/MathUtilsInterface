import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forca-de-aceleracao',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forca-de-aceleracao.component.html',
  styleUrl: './forca-de-aceleracao.component.css'
})
export class ForcaDeAceleracaoComponent {
  massa!: number; 
  acceleracao!: number;
  force!: number; 
  resultado: any;
  constructor( private router: Router){}
  calcular() {
    this.force = this.massa * this.acceleracao;
    this.resultado = "A força de aceleração é de " + this.force + " N"
  }
  voltar(){
    this.router.navigate(['']);
  }
}