import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {


  htmlElement     : ElementRef<HTMLElement>;
  @Input() color  : string = 'red';
  @Input() mensaje: string = 'Este campo es necesario';
  @Input() otroMensaje: string = 'complete este campo';


  constructor( private  elem: ElementRef<HTMLElement>) {
  // console.log('contructor directive');
  // console.log(elem);
  //elem.nativeElement.style.color = 'red';
    this.htmlElement = elem;
  }

  ngOnChanges(changes: SimpleChanges): void{
    //console.log(changes);
    if ( changes.otroMensaje){
      const otroMensaje = changes.otroMensaje.currentValue;
      //console.log(otroMensaje);
      this.htmlElement.nativeElement.innerText = otroMensaje;
    }
    if ( changes.color ){
      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
    console.log(changes);
  }

  ngOnInit(): void {
  //  console.log('NgOnInit  directive');
    this.setColor();
    this.setMensaje();
    this.setOtroMensaje();
    this.setEstilo();
  }


  setColor(): void {
    //this.htmlElement.nativeElement.style.color = 'red';
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setOtroMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.otroMensaje;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
