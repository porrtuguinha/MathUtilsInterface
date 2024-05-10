import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) { }

  irParaEquacaoSegundoGrau() {
    this.router.navigate(['/equacaosegundograu']);
  }

  irParaDerivada() {
    this.router.navigate(['/derivada']);
  }

  irParaIntegral() {
    this.router.navigate(['/integral']);
  }
  irParaErlang() {
    this.router.navigate(['/erlangc']);
  }
}
