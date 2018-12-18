import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';

/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class TasksServiceProvider {

  db: SQLiteObject = null;
  tasksServiceProvider : TasksServiceProvider;
  

  constructor(public http: HttpClient, public sqlite: SQLite) {
    console.log('Hello TasksServiceProvider Provider');
  }

  setDatabase(db: SQLiteObject){
    if(this.db == null){
      this.db = db;
    }
  }

  // TABLA DE FIRMA 

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS firma(idFirma INTEGER PRIMARY KEY AUTOINCREMENT, numEscritura INTEGER, fecha TEXT, precioVivienda DOUBLE, numCaras INTEGER, garaje INTEGER, trastero INTEGER, numPersona INTEGER, idOficinas INTEGER FOREIGN KEY)';
  return this.db.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM firma';
    return this.db.executeSql(sql, [])
    .then(response => {
      let firma = [];
      for (let index = 0; index < response.rows.length; index++) {
        firma.push( response.rows.item(index) );
      }
      return Promise.resolve( firma );
    })
    .catch(error => Promise.reject(error));
  }

  create(firma: any){
    let sql = 'INSERT INTO firma(numEscritura, fecha, precioVivienda, numCaras, garaje, trastero, numPersona, idOficinas) VALUES(?,?,?,?,?,?,?,?)';
    return this.db.executeSql(sql, [firma.numEscritura, firma.fecha, firma.precioVivienda, firma.numCaras, firma.garaje, firma.trastero, firma.numPersona, firma.idOficinas]);
  }

  update(firma: any){
    let sql = 'UPDATE firma SET numEscritura=?, fecha=?, precioVivienda=?, mumCaras=?, garaje=?, trastero=?, numPersona=?, idOficinas=? WHERE idFirma=?';
    return this.db.executeSql(sql, [firma.numEscritura, firma.fecha, firma.precioVivienda, firma.numCaras, firma.garaje, firma.trastero, firma.numPersona, firma.idOficinas, firma.idFirma]);
  }

  delete(firma: any){
    let sql = 'DELETE FROM firma WHERE idFirma=?';
    return this.db.executeSql(sql, [firma.idFirma]);
  }

    createDatabase(){
    this.sqlite.create({
      name: 'apoderados.db',
      location: 'C:/Users/etiel/Desktop/Proyecto/' // the location field is required
    })
    .then((db) => {
      this.tasksServiceProvider.setDatabase(db);
      return this.tasksServiceProvider.createTable();
    })
    .catch(error =>{
      console.error(error);
    });
  }
}
