import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IndicadoresService } from '../../services/indicadores.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Indicator, SerieValue } from '../../interfaces/indicadores.interface';
import { DataServicesService } from '../../services/data-services.service';
import { Location } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-detalle-historico',
  templateUrl: './detalle-historico.component.html',
  styleUrls: ['./detalle-historico.component.css']
})
export class DetalleHistoricoComponent implements OnInit {
  
  @ViewChild("newCanvas",{static:true}) elemento: ElementRef;

  idIndicador:any='';
  prueba2:any={};
  series:SerieValue[]=[];
  fecha:any[]=[];
  valor:any[]=[];
  constructor(private _location: Location,public indicatorService:IndicadoresService,private rutaActiva: ActivatedRoute,public dataServices:DataServicesService ) {
   }

  ngOnInit():void {
    this.rutaActiva.params
  .subscribe(
    (updatedParams) => {
      this.idIndicador = updatedParams['id'];
    }
  )
  this.loadIndicator();
  
    
  

    }
    
    loadIndicator(){
      this.indicatorService.getIndicator(this.idIndicador).subscribe( res => {
        console.log(res);
        this.prueba2=res
        console.log(this.prueba2)
        this.series= res.serie;
        console.log(this.series)
        for(let serie of this.series) {
            this.fecha.push(serie.fecha);
            this.valor.push(serie.valor);
        }
        
      });
        
    
      }
      hacerGrafica(){
        new Chart(this.elemento.nativeElement,{
          type:'line',
          data:{
            labels: [...this.fecha],
            datasets:[
              {
                data:[...this.valor]
              }
            ]
          }
        });
        }
      goBack(){
        this._location.back();
      }
    }
  // loadIndicator(){
  //   this.indicatorService.getIndicator()
  // }

