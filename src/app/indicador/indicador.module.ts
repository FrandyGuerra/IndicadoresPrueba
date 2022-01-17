import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { DetalleHistoricoComponent } from './pages/detalle-historico/detalle-historico.component';
import { AppRoutingModule } from '../app-routing.module';
import { ChartComponent } from './pages/detalle-historico/chart/chart.component';



@NgModule({
  declarations: [
    IndicadoresComponent,
    DetalleHistoricoComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    IndicadoresComponent,
    DetalleHistoricoComponent,
  ],
})
export class IndicadorModule { }
