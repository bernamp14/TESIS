import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../../services/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
  providers: [PdfService]
})
export class PdfComponent implements OnInit {

  page: number = 1;
  totalpage: number = 1000;
  pdfSrc: string = '';
  file: any;

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
    this.pdfSrc = this.pdfService.getPDF('');
  }

  onFileSelected() {
    let img: any = document.querySelector("#file");

    if(typeof (FileReader) !== 'undefined') {
      let reader:FileReader = new FileReader();
      
      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
      }
      reader.readAsArrayBuffer(img.files[0]);      
    }
  }
  
  callBackFn(pdf: any) {
    this.totalpage = pdf.numPages;
 }

  NextPage() {
    debugger;
    if ((this.page.valueOf() + 1) <= this.totalpage) {
      
      this.page = this.page + 1;
    }
  }

  PreviousPage() {
    debugger;
    if ((this.page - 1) > 0) {
      this.page = this.page - 1;
    }
  }

}

