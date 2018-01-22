//
// @Directive({ selector: '[appTestIfDirective]'})
// export class AppTestIfDirective {
//
//   constructor(
//     private templateRef: TemplateRef<any>,
//     private viewContainer: ViewContainerRef) { }
//
//   @Input() set appTestIfDirective(condition: boolean) {
//     if (condition) {
//       this.viewContainer.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainer.clear();
//     }
//   }
// }
//
//
// @Directive({ selector: '[appTestForDirective]'})
// export class AppTestForDirective implements OnInit  {
//
//
//   constructor(
//     private container: ViewContainerRef,
//     private template: TemplateRef<any>) { }
//
//   ngOnInit(): void {
//     for (const input of this.appNgLoop) {
//       this.container.createEmbeddedView(this.template);
//     }
//   }
//
// }
