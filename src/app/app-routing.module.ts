import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleHistoricoComponent } from './indicador/pages/detalle-historico/detalle-historico.component';
import { IndicadoresComponent } from './indicador/pages/indicadores/indicadores.component';

const routes: Routes = [
  { path: '', component: IndicadoresComponent },
  { path: 'detalleHistorico', component: DetalleHistoricoComponent },
  { path: 'detalleHistorico/:id', component: DetalleHistoricoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],

    
  exports: [RouterModule]
})
export class AppRoutingModule { }
