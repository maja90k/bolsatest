import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/models/interfaces';
import { AutoService } from 'src/app/services/auto.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  autos: any = [];
  errores: any = [];


  formAuto: Auto = {
    id: NaN,
    marca: '',
    modelo: '',
    fecha_ingreso: '',
  }

  constructor(private autoService: AutoService) { }

  limpiarFormulario() {
    this.formAuto.marca = "";
    this.formAuto.modelo = "";
  }

  getAutos() {
    this.autoService.getAll().subscribe(auto => this.autos = auto);
  }

   eliminarAuto(id: number) {
    let respuesta = confirm('Se eliminara el Auto con ' + `${id}` + ' ' + 'seleccionado.');
    if (respuesta) {
      this.autoService.deleteAuto(id).subscribe();
    } else {
      alert("Se cancelo la accion Eliminar el auto con id: " + `${id}`);
    }
    this.getAutos();
  }

  editarAuto(modelo : Auto) {

  }

  async onSubmit() {
    this.errores = [];
    if (this.formAuto.marca.trim() == "") {
      this.errores.push("Debe Ingresar una Marca distinta de Vacio.")
    }else if(this.autos.find((primVal : any) => primVal.marca == this.formAuto.marca) && ((segVal : any) => segVal.modelo == this.formAuto.modelo)){
      this.errores.push("Debe ingresar autos no repetidos");
      this.limpiarFormulario();
    }
    if (this.formAuto.modelo.trim() == "") {
      this.errores.push("Debe Ingresar un Modelo distinto de Vacio.")
    }
    if(this.errores.length == 0){
      await this.autoService.saveAuto(this.formAuto);
      this.getAutos();
      this.limpiarFormulario();
    }else{
      var mensaje  = this.errores.join("\n");
      alert(mensaje);
    }
  }

  ngOnInit() {
    this.getAutos();
  }

}
