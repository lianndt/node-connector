import { CustomError } from "./custom-error";

export class NawaiamError extends CustomError {
  codigo: number;
  descripcion: any;

  constructor(error: any) {
    super();
    this.codigo = error.code;
    this.descripcion = error.message;
  }

  serializeErrors() {
    return this.descripcion;
  }
}
