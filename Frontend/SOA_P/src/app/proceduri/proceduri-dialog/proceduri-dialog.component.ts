import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog as MatDialog, MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { ProceduriService } from '../proceduri.service';
import {MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from '@angular/material/legacy-dialog'

@Component({
  selector: 'app-proceduri-dialog',
  templateUrl: './proceduri-dialog.component.html',
  styleUrls: ['./proceduri-dialog.component.css']
})
export class ProceduriDialogComponent implements OnInit {
  pdfVal: any
    constructor(public dialogRef: MatDialogRef<ProceduriDialogComponent>,
                public proceduriService: ProceduriService,
                @Inject(MAT_DIALOG_DATA) public data: any
                ) {proceduriService.getPdf(this.getId()).subscribe(
                  (response:any) => {
                    //let blob: Blob = response.body as Blob;
                    let url = response.url;
                    this.pdfVal = url;
                });}
  
    close(){
      this.dialogRef.close()
    }
    getId():any{
      return this.data.did
    }
    PreviewPDf(id:string){
      this.proceduriService.getPdf(id).subscribe(
        (response:any) => {
          let blob: Blob = response.body as Blob;
          let url = response.url;
          this.pdfVal = url;
         // window.open(url)
      });
    }

  ngOnInit(): void {
  }

}




// export class DialogAnimationsExampleDialog{
//   pdfVal: any
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>,
//               public proceduriService: ProceduriService,
//               @Inject(MAT_DIALOG_DATA) public data: any
//               ) {proceduriService.getPdf(this.getId()).subscribe(
//                 (response:any) => {
//                   //let blob: Blob = response.body as Blob;
//                   let url = response.url;
//                   this.pdfVal = url;
//               });}

//   close(){
//     this.dialogRef.close()
//   }
//   getId():any{
//     return this.data.did
//   }
//   // PreviewPDf(id:string){
//   //   this.proceduriService.getPdf(id).subscribe(
//   //     (response:any) => {
//   //       let blob: Blob = response.body as Blob;
//   //       let url = response.url;
//   //       this.pdfVal = url;
//   //      // window.open(url)
//   //   });
//   // }
// }