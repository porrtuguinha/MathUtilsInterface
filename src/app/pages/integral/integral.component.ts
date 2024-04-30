import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integral',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './integral.component.html',
  styleUrl: './integral.component.css'
})
export class IntegralComponent {
  constructor(private router: Router){}
  Parametros!: string;
  resultado!: any;
   a!: number;
   b!: number;
   i!: number;
   i_2!: number;
   a2!: number;
   b2!: number;
   c2!: number;
   i2!: number;
   i_22!: number;
   a3!: number;
   b3!: number;
   c3!: number;
   d3!: number;
   i3!: number;
   i_23!: number;
   x4!: number;
   x5!: number;

calcular(){
if (this.Parametros  === "primeirograu") {
  let f: number = this.i;
  let y: number = 0.0;
  let n: number = 0.0;
  while (this.i_2 > f) {
      f = f + 0.000001;
      y = y + (2 * ((this.a * f) + (this.b)));
      n = n + 1;
  }
  let h: number = (this.i_2 - this.i) / (n);
  let integral_1: number = ((h / 2) * (((this.a * this.i) + this.b) + y + ((this.a * this.i_2) + this.b)));
  this.resultado = "A integral da função = " + integral_1.toFixed(2);
}
  else if(this.Parametros === "segundograu"){
   
      let f2: number = this.i2;
      let y2: number = 0.0;
      let n2: number = 0.0;
      while (this.i_22 > f2) {
          f2 = f2 + 0.000001;
          y2 = y2 + (2 * ((this.a2 * f2 * f2) + (this.b2 * f2) + this.c2));
          n2 = n2 + 1;
      }
      let h2: number = (this.i_22 - this.i2) / (n2);
      let integral_12: number = ((h2 / 2) * (((this.a2 * this.i2 * this.i2) + (this.b2 * this.i2) + this.c2) + y2 + ((this.a2 * this.i_22 * this.i_22) + (this.b2 * this.i_22) + this.c2)));
      this.resultado = "A integral da função = " + integral_12.toFixed(2);
  }
  else if(this.Parametros === "terceirograu"){
      let f3: number = this.i3;
      let y3: number = 0.0;
      let n3: number = 0.0;
      while (this.i_23 > f3) {
          f3 = f3 + 0.000001;
          y3 = y3 + (2 * ((this.a3 * f3 * f3 * f3) + (this.b3 * f3 * f3) + (this.c3 * f3) + this.d3));
          n3 = n3 + 1;
      }
      let h3: number = (this.i_23 - this.i3) / (n3);
      let integral_13: number = ((h3 / 2) * (((this.a3 * this.i3 * this.i3 * this.i3) + (this.b3 * this.i3 * this.i3) + (this.c3 * this.i3) + this.d3) + y3 + ((this.a3 * this.i_23 * this.i_23 * this.i_23) + (this.b3 * this.i_23 * this.i_23) + (this.c3 * this.i_23) + this.d3)));
      this.resultado = "A integral da função = " + integral_13.toFixed(2);
    }
  else if(this.Parametros === "seno"){
     
      if (this.x4 === 90 || this.x4 === 270) {
          console.log("O valor da integral é = 0.0");
      } else {
          let x_radians4: number = this.x4 * Math.PI / 180;
          let y4: number = Math.sin(x_radians4);
          this.resultado = "O valor da integral é = " + y4.toFixed(2);
      }
    }
  else if(this.Parametros === "cosseno"){
      console.log("Coloque o ponto da função em graus:");
     
      if (this.x5 === 0 || this.x5 === 360 || this.x5 === 180) {
        this.resultado = "O valor da integral é = 0.0";
      } else {
          let x_radians5: number = this.x5 * Math.PI / 180;
          let y5: number = Math.cos(x_radians5);
          this.resultado = "O valor da integral é = " + y5.toFixed(2);
      }

    }


   

}
voltar(){
  this.router.navigate(['']);
}
}

