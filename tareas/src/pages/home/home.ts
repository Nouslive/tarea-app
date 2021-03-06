import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tareas = [];
  constructor(
    public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTareas: TareaProvider
  ) {
    this.tareas = servicioTareas.obtenerTareas();
  }
  agregarTarea() {
    let alert = this.alerta.create({
      title: "agregar tarea",
      inputs: [{
        type: "text",
        name:"textoTarea"
      }],
      buttons:[
        {text: "Cancelar"},
        {
          text: "Agregar",
          handler:(datos) =>{
          // console.log(datos);
          // this.tareas.push(datos.textoTarea);
          this.servicioTareas.agregarTarea(datos.textoTarea);
        }
        }

      ]
    })
    alert.present();
    // this.tareas.push("nueva tarea");
    // console.log(this.tareas);
  }
  archivarTarea(indiceTarea){
  console.log(indiceTarea);
  this.servicioTareas.archivarTarea(indiceTarea);
  }
}
