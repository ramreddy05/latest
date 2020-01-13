import { Injectable } from "@angular/core";
import jsPDF from "jspdf";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  constructor() {}
  createPDF(pdfTable): any {
    const doc = new jsPDF();

    const specialElementHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };

    doc.fromHTML(pdfTable.nativeElement.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    return doc;
  }
}
