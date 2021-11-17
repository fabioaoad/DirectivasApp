import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective implements OnDestroy{

  @Input() set customIf( condicion: boolean ){
    if ( condicion ){
      //Muestro el elemento pasando la referencia del templateRef
      this.viewContainer.createEmbeddedView( this.templateRef );
    }
    else {
      //Oculto el elemento
      this.viewContainer.clear();
    }
  }

  constructor( private templateRef: TemplateRef<HTMLElement>,
               private viewContainer: ViewContainerRef) {
   // console.log('customIF');

  }

  ngOnDestroy(): void {
   // console.log('ngOnDestroy de la directiva customIf');
  }

}
