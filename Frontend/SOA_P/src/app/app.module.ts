import { LayoutModule } from '@angular/cdk/layout';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ProceduriComponent } from './proceduri/proceduri.component';
import { SurveyComponent } from './survey/survey.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HrComponent } from './hr/hr.component';


import { ProceduriDialogComponent } from './proceduri/proceduri-dialog/proceduri-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ProceduriComponent,
    SurveyComponent,
    HrComponent,
   ProceduriDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    LayoutModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
 //   ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule,
    PdfViewerModule,
    // FileSaverModule,
    // NgxExtendedPdfViewerModule,
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
