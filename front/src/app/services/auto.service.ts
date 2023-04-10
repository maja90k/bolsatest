import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auto } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  endpoint = environment.endpoint
  auto : Auto = {
    id: NaN,
    marca: '',
    modelo: '',
    fecha_ingreso: '',
  }

  constructor(private http: HttpClient) { }

  async saveAuto(auto: any) {
    try {
      const res = this.http.post(`${this.endpoint}/reqPost`, auto).toPromise();
      alert('Se agregó el auto con exito.');
      return res
    } catch (e) {
      return e
    }
  }

  getAll() {
    return this.http.get(`${this.endpoint}/getAll`);
  }

  deleteAuto(id: any) {
    return this.http.delete(`${this.endpoint}/reqPost/${id}`);
  }

  editarAuto(auto : Auto) {
    return this.http.put(`${this.endpoint}/reqPost/`,auto);
  }

}
