export class Cliente {
    id: number; 
    Nombre: string;
    Apellido1: string;
    Apellido2: string;
    NIF: string;
    
    constructor(values: Object = {}) {
         Object.assign(this, values);
    }
 }
 