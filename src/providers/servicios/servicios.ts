import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

/*
  Generated class for the ServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiciosProvider {
  baseUrl: string = "http://5770fdd0.ngrok.io/rutcucuta/public";

  constructor(public http: HttpClient) {
    console.log("Hello ServiciosProvider Provider");
  }

  login(datos: any): Observable<any> {
    return this.http.post(
      this.baseUrl + "/login",
      { email: datos.correo, password: datos.clave },
      { headers: { "Content-Type": "application/json" } }
    );
  }

  registrar(datos: any): Observable<any> {
    return this.http.post(
      this.baseUrl + "usuario/registrar",
      { email: datos.correo, password: datos.clave },
      { headers: { "Content-Type": "application/json" } }
    );
  }

  cargarDestinos(destino: string): Observable<any> {
    let value = window.localStorage.getItem("token");
    return this.http.post(this.baseUrl + "/cargarDestinos", destino, {
      headers: { "Content-Type": "application/json", Authorization: value }
    });
  }

  isLogged() {
    if (window.localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tipo");
    return true;
  }

  recuperarClave(dato) {
    return this.http.post(this.baseUrl + "v2/recuperarclave", dato);
  }

  public extractData(token: string, tipo: string) {
    window.localStorage.setItem("token", token);
    window.localStorage.setItem("tipo", tipo);
  }
}
