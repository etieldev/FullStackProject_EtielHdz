export class Firma {
  id_Firma: number;
  num_escritura: number;
  fecha: string;
  precio_vivienda: number;
  num_caras: number;
  garaje: number;
  trastero: number;
  num_persona: number;
  Id_Oficinas: number;

  id:any;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}



