import {Component, Input, NgModule} from '@angular/core';
import {MaterialModule} from '../../core/shared/material';


export interface FooterModel {
  color: string;
  items: [string[]];
  buttons: [
    {
      text: string,
      link: string,
      image: string,
      color: string,
    }
  ];
}


@Component({
  selector: 'app-footer',
  template: `
    <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center" [style.background]=model.color style="padding:24px">

      <div class="section" *ngFor="let item of model.items">
        <p *ngFor="let text of item">{{text}}</p>
      </div>

			<div class="section" fxLayout="column" fxLayoutGap="8px">
        <div *ngFor="let item of model.buttons" routerLink="{{item.link}}">
					<a mat-raised-button [style.background]=item.color>{{item.text}}</a>
				</div>
			</div>

    </div>
  `,
  styles: [`
      .section {
          margin: 12px;
          color: white;
          justify-content: center;
          align-items: center;
      }
  `]
})
export class FooterComponent {
  @Input() model: FooterModel;
}


@NgModule({
  declarations: [FooterComponent],
  imports: [MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
