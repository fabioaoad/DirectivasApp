import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement     : ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _otroMensaje: string = 'complete este campo';

  @Input() set color( valor: string ){
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  }
  //@Input() color : string = 'red';

  // @Input() mensaje: string = 'Este campo es necesario';
  //@Input() otroMensaje: string = 'complete este campo';

  @Input() set otroMensaje( valor: string ){
    //console.log(valor);
   // this.htmlElement.nativeElement.innerText = valor;
    this._otroMensaje = valor;
    this.setOtroMensaje();
  }


  constructor( private  elem: ElementRef<HTMLElement>) {
  // console.log('contructor directive');
  // console.log(elem);
  //elem.nativeElement.style.color = 'red';
    this.htmlElement = elem;
  }

  ngOnChanges(changes: SimpleChanges): void{
    //console.log(changes);
    // if ( changes.otroMensaje){
    //   const otroMensaje = changes.otroMensaje.currentValue;
    //   //console.log(otroMensaje);
    //   this.htmlElement.nativeElement.innerText = otroMensaje;
    // }
    // if ( changes.color ){
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log(changes);
  }

  ngOnInit(): void {
    //  console.log('NgOnInit  directive');
    // console.log(this.color);       //undefined
    // console.log(this.otroMensaje); //undefined
     this.setColor();
    // this.setMensaje();
     this.setOtroMensaje();
     this.setEstilo();
  }


  setColor(): void {
    //this.htmlElement.nativeElement.style.color = 'red';
    //this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.style.color = this._color;
  }

  // setMensaje(): void {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }

  setOtroMensaje(): void {
    //this.htmlElement.nativeElement.innerText = this.otroMensaje;
    this.htmlElement.nativeElement.innerText = this._otroMensaje;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
