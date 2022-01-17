import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  nombreIndicador: any;
@Output() disparador:EventEmitter<any>=new EventEmitter();
    constructor() { }

    
}
