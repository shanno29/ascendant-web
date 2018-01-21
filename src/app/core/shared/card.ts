import {Component, Input, NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';


export interface CardModel {
  id: string;
  titles: string[];
  subtitles: string[];
  images: string[];
  texts: string[];
  footers: string[];
}


@Component({
  selector: 'app-card',
  template: `
    <mat-card>

			<mat-card-title>
				<h3 *ngFor="let title of model.titles">{{title}}</h3>
			</mat-card-title>

			<mat-card-subtitle>
				<h2 *ngFor="let sub of model.subtitles">{{sub}}</h2>
			</mat-card-subtitle>
      
			<mat-card-content>
				<p *ngFor="let text of model.texts" class="spaced">{{text}}</p>
      </mat-card-content>
      
		</mat-card>
  `,
})
export class CardComponent {
  @Input() model: CardModel;
}


@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule {}

