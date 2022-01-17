import { Component, OnInit } from '@angular/core';
import { Indicator } from '../../interfaces/indicadores.interface';
import { DataServicesService } from '../../services/data-services.service';
import { IndicadoresService } from '../../services/indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
})
export class IndicadoresComponent implements OnInit {

  prueba:Indicator[]=[];

  
  constructor(public indicatorService:IndicadoresService,private dataServices:DataServicesService) { }

  
  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.indicatorService.getDailyIndicators().subscribe( res => {
      console.log(res)
      this.prueba.push(res.uf);
      this.prueba.push(res.utm);
      this.prueba.push(res.bitcoin);
      this.prueba.push(res.dolar);
      this.prueba.push(res.imacec);
      this.prueba.push(res.ivp);
      this.prueba.push(res.dolar_intercambio);
      this.prueba.push(res.euro);
      this.prueba.push(res.ipc);
      this.prueba.push(res.tpm);
      this.prueba.push(res.libra_cobre);
      this.prueba.push(res.tasa_desempleo);
      console.log(this.prueba);
    })

  
  

}
}