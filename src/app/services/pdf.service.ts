import { Injectable } from '@angular/core';

@Injectable()
export class PdfService {

  constructor() { }

  getPDF(ruta: string): string {
    return ruta;
  }
}
