import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  @Input() date?: number;
  booleanTask:boolean=false;
  tasks:string[]=['']
  constructor() {
    // Lógica para verificar si el número es par cuando se inicializa el componente
    this.booleanTask = this.isEven(this.date);
  }

  ngOnChanges() {
    // Lógica para verificar si el número es par cuando cambie el valor de @Input() date
    this.booleanTask = this.isEven(this.date);
    if (this.booleanTask) {
      this.tasks=['tarea1','tarea2','tarea3','tarea4']
    }
  }

  isEven(num: number | undefined): boolean {
    return num !== undefined && num % 2 === 0;
  }
}
