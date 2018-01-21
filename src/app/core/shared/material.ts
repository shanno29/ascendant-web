import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {CardModule} from './card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    CardModule
  ],
  exports: [
    FlexLayoutModule,
    RouterModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    CardModule
  ]
})
export class MaterialModule {}
