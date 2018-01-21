import {Component, Input, NgModule} from '@angular/core';
import {MaterialModule} from '../../core/shared/material';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


export interface ToolbarModel {
  color: string;
  logo: string;
  items: [
    {
      link: number;
      text: string;
    }
    ];
}


@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar fxLayout="row" [style.background]=model.color>

			<img id="logo-image" routerLink="/" [src]=sanitize(model.logo)>

      <a fxFlex="1 1 auto"></a>

      <div *ngFor="let item of model.items">
        <a mat-button id="underlined" routerLink="{{item.link}}">{{item.text}}</a>
      </div>
      
			<mat-menu #appMenu="matMenu">
				<div *ngFor="let item of model.items">
					<a mat-button routerLink="{{item.link}}">{{item.text}}</a>
				</div>
			</mat-menu>

			<mat-icon id="menu-button" [matMenuTriggerFor]="appMenu">more_vert</mat-icon>
      
		</mat-toolbar>
    
		
  `,
  styles: [`
    #container {
        padding-left: 0;
    }

    #logo-image {
        margin: 64px 24px 24px;
        height: 64px
    }

    #menu-button {
        padding: 24px;
        display: none;
        color: white;
        height: 32px;
        width: 32px;
        font-size: 32px;
        margin-right: -16px;
        margin-top: 24px;
    }

    #underlined {
        border-bottom: solid orange;
        font-size: 18px;
        color: white;
        margin-top: 24px;
        margin-right: 24px;
    }

    @media screen and (max-width: 820px) {
        #underlined {  display: none;  }
        #menu-button {  display: unset;  }
    }
  `],
})
export class ToolbarComponent {
  @Input() model: ToolbarModel;

  constructor(private sanitizer: DomSanitizer) {}

  sanitize(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`${image}`);
  }
}


@NgModule({
  declarations: [ToolbarComponent],
  imports: [MaterialModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
