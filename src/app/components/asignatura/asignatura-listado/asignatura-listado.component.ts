import { Component, OnInit } from '@angular/core';
import { AsignaturaResumenComponent } from './../asignatura-resumen/asignatura-resumen.component';

@Component({
  selector: 'app-asignatura-listado',
  templateUrl: './asignatura-listado.component.html',
  styleUrls: ['./asignatura-listado.component.css']
})
export class AsignaturaListadoComponent implements OnInit {

  constructor() {}
   listado_asignaturas: any[] = [
    { "id": "1",
      "nombre": "Calculo diferencial",
      "resumen": {
                "tareas_pendientes":3,
                "notificaciones": 5
      }
    },

    { "id": "2",
      "nombre": "Programación basica",
      "resumen": {
                "tareas_pendientes":2,
                "notificaciones": 4
      }
    },

    { "id": "3",
      "nombre": "Fisica I",
      "resumen": {
                "tareas_pendientes":2,
                "notificaciones": 3
      }
    },

    { "id": "4",
      "nombre": "Quimica basica",
      "resumen": {
                "tareas_pendientes":1,
                "notificaciones": 3
      }
    },

    { "id": "5",
      "nombre": "Comunicación I",
      "resumen": {
                "tareas_pendientes":0,
                "notificaciones": 1
      }
    }
  ]
  asignaturas: any[] = this.listado_asignaturas;

  ngOnInit() {
  }

  buscar(termino: string) {
    let resultadoaArr: any[] = []
    termino = termino.toLowerCase();
    for (let asignatura of this.listado_asignaturas) {
      let search: string = asignatura.nombre.toLowerCase();
      if (search.indexOf( termino ) >= 0 ) {
        resultadoaArr.push( asignatura );
      }
    }
    this.asignaturas = resultadoaArr;
  }
}
