import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erlangc',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './erlangc.component.html',
  styleUrl: './erlangc.component.css'
})
export class ErlangcComponent {
  traffic!: number;
  servers!: number;
  intervals!: number;
  timeInterval!: number;
  results: { time: number, erlangC: number }[] = [];
  constructor(private Router: Router){}

  calculateTraffic() {
    this.results = [];
    for (let i = 1; i <= this.intervals; i++) {
      const currentTime = i * this.timeInterval;
      const erlangC = this.calculateErlangC(this.traffic, this.servers, currentTime);
      this.results.push({ time: currentTime, erlangC: erlangC });
    }
  }

  calculateErlangC(traffic: number, servers: number, averageServiceTime: number): number {
    const rho = traffic / (servers * averageServiceTime);
    let sum = 0;
    let factorial = 1;

    for (let i = 0; i < servers; i++) {
      factorial *= i > 0 ? i : 1;
      sum += Math.pow(rho, i) / factorial;
    }

    const denominator = factorial + (Math.pow(servers * rho, servers) / (factorial * (servers - rho)));

    return (Math.pow(rho, servers) / denominator) * 100;
  }
  voltar(){
    this.Router.navigate(['']);
  }
}
