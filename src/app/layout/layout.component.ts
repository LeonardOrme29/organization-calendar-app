import { Component } from '@angular/core';
import { Month } from './Month';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent {
  fechaActual = new Date();
  mesActual = this.fechaActual.getMonth();
  diaActual=this.fechaActual.getDate();
  months:Month[]=[
    {name:'ENERO',number:31},
    {name:'FEBRERO',number:28},
    {name:'MARZO',number:31},
    {name:'ABRIL',number:30},
    {name:'MAYO',number:31},
    {name:'JUNIO',number:30},
    {name:'JULIO',number:31},
    {name:'AGOSTO',number:31},
    {name:'SEPTIEMBRE',number:30},
    {name:'OCTUBRE',number:31},
    {name:'NOVIEMBRE',number:30},
    {name:'DICIEMBRE',number:31}
  ]
  getFirstDayOfMonth(fechaActual: Date): number {
    const firstDayOfMonth = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    return firstDayOfMonth.getDay();
  }
  diaCache: { [key: number]: any } = {};
  primerDia = this.getFirstDayOfMonth(this.fechaActual)+1; //1(domingo),2(lunes),3(martes),...
  dia(dayNumber: number): any {
    if (this.diaCache.hasOwnProperty(dayNumber)) {
      return this.diaCache[dayNumber];
    }
    console.log('inicio')
    if (this.primerDia===6) {
      if (dayNumber===30) {
        console.log('d30')
        return{
          'grid-row':`1/2`
        }
      }
    }
    if (this.primerDia===7) {
      if (dayNumber===30) {
        console.log('d30 2')
        return{
          'grid-row':`1/2`
        }
      }
      if (dayNumber===31) {
        console.log('d31')
        return{
          'grid-row':`1/2`,
          'grid-column':'2/3'
        }
      }
    }
    if (dayNumber === 1){
      console.log('orden')
        return{
          'grid-column':`${this.primerDia}/${this.primerDia+1}`
        }
      }
      if (dayNumber === this.diaActual) {
        console.log('color')
        return {
          'box-shadow': '0px 0px 0px 5px inset',
          'color': '#236dff'
        };
      } else {
        return {}; // Si no se cumple la condición, se retorna un objeto vacío
      }
  }
}
