import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { Procedura } from '../model/proceduri';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { MatDialog as MatDialog, MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { ProceduriService } from './proceduri.service';
import { ProceduriDialogComponent } from './proceduri-dialog/proceduri-dialog.component';


@Component({
  selector: 'app-proceduri',
  templateUrl: './proceduri.component.html',
  styleUrls: ['./proceduri.component.css'],
})


export class ProceduriComponent implements OnInit {
  cols = 4;
  length = 0;
  pageIndex = 0;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 20];
  pageEvent!: PageEvent | void;
  proceduri!: Procedura[];
  pdfVal: any


  constructor(
    public dialog: MatDialog,
    public proceduriService: ProceduriService,
  ) {}
  @ViewChild('content') popupview !: ElementRef;
  openDialog(
    id:string
  ): void {
    this.dialog.open(ProceduriDialogComponent, {
      width: '100%',
      height:'100%',
      data: {
        did: id
      }
    });
  }

  ngOnInit(): void {
    this.showProceduri()
  }


  showProceduri() {
    return this.proceduriService.getProceduri().subscribe((req: Procedura[]) => this.proceduri = req);
    
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
}

export * from './proceduri.component';
