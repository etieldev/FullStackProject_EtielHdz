import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { Firma } from '../../models/firma';
import { Cliente } from '../../models/cliente';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {

  private baseUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {}
  
    
    private getOptions(){
      let user = "etiel";
      let password = "etiel";
      let base64UserAndPasswordEtiel = window.btoa(user + ":" + password);

      let basico = 'basic' + base64UserAndPasswordEtiel;
      let options = {
        headers: {
        'Access-Control-Allow-Origin' : 'http://localhost:8100',
        'Authorization' : basico,
        'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }
        

   public getFirmas(): Observable<Firma[]> {
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/firma', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public getFirmaById(Id_Firma: number): Observable<Firma> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/firma/' + Id_Firma, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


// GET de todos los clientes   
  public getClientes(): Observable<Cliente[]> {
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/cliente', options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

// GET de cliente por ID

  public getClienteById(Id_Cliente: number): Observable<Cliente> {
    
    let options = this.getOptions();

    return this.http.get(this.baseUrl + '/cliente/' + Id_Cliente, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  public createFirma(firma: any): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('num_escritura', firma.num_escritura);
    urlSearchParams.append('fecha', firma.fecha);
    urlSearchParams.append('precio_vivienda', firma.precio_vivienda);
    urlSearchParams.append('num_caras', firma.num_caras);
    urlSearchParams.append('garaje', firma.garaje);
    urlSearchParams.append('trastero', firma.trastero);
    urlSearchParams.append('num_persona', firma.num_persona);
    urlSearchParams.append('Id_Oficinas', firma.Id_Oficinas);


    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/firma', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public createCliente(cliente: any): Observable<any> {
    
    let options = this.getOptions();

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('Nombre', cliente.Nombre);
    urlSearchParams.append('Apellido1', cliente.Apellido1);
    urlSearchParams.append('Apellido2', cliente.Apellido2);
    urlSearchParams.append('NIF', cliente.NIF);

    let body = urlSearchParams.toString();

    return this.http.post(this.baseUrl + '/cliente', body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateFirma(firma: any, id_Firma: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('num_escritura', firma.num_escritura);
    urlSearchParams.append('fecha', firma.fecha);
    urlSearchParams.append('precio_vivienda', firma.precio_vivienda);
    urlSearchParams.append('num_caras', firma.num_caras);
    urlSearchParams.append('garaje', firma.garaje);
    urlSearchParams.append('trastero', firma.trastero);
    urlSearchParams.append('num_persona', firma.num_persona);
    urlSearchParams.append('id_Oficinas', firma.id_Oficinas.id_Oficinas);
    
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/firma/' + id_Firma, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public updateCliente(cliente: any, Id_Cliente: number): Observable<any> {
    
    let options = this.getOptions();
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('Nombre', cliente.Nombre);
    urlSearchParams.append('Apellido1', cliente.Apellido1);
    urlSearchParams.append('Apellido2', cliente.Apellido2);
    urlSearchParams.append('NIF', cliente.NIF);
    
    let body = urlSearchParams.toString();

    return this.http.put(this.baseUrl + '/cliente/' + Id_Cliente, body, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteFirmaById(id_Firma: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/firma/' + id_Firma, options).pipe(
      catchError(this.handleError)
    );
  }

  public deleteClienteById(Id_Cliente: number) {
    
    let options = this.getOptions();

    return this.http.delete(this.baseUrl + '/cliente/' + Id_Cliente, options).pipe(
      catchError(this.handleError)
    );
  }

  private extractData(res: Response) {
    let body = res;
    console.log(JSON.stringify(body));
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
   }     

  

  
      


