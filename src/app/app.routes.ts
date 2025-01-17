import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { EquacaoSegundoGrauComponent } from './pages/equacao-segundo-grau/equacao-segundo-grau.component';
import { DerivadaComponent } from './pages/derivada/derivada.component';
import { IntegralComponent } from './pages/integral/integral.component';
import { ErlangcComponent } from './pages/erlangc/erlangc.component';
import { ForcaDeAceleracaoComponent } from './pages/forca-de-aceleracao/forca-de-aceleracao.component';
import { LancamentoHorizontalComponent } from './pages/lancamento-horizontal/lancamento-horizontal.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'equacaosegundograu', component: EquacaoSegundoGrauComponent},
    {path: 'derivada', component: DerivadaComponent },
    {path: 'integral', component: IntegralComponent},
    {path: 'erlangc', component: ErlangcComponent},
    {path: 'aceleracao', component: ForcaDeAceleracaoComponent},
    {path: 'lancHorizontal', component: LancamentoHorizontalComponent}
    
]
