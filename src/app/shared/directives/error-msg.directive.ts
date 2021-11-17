import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {


  htmlElement     : ElementRef<HTMLElement>;
  @Input() color  : string = 'red';
  @Input() mensaje: string = 'Este campo es necesario';


  constructor( private  elem: ElementRef<HTMLElement>) {
  // console.log('contructor directive');
  // console.log(elem);
  //elem.nativeElement.style.color = 'red';
    this.htmlElement = elem;
  }

  ngOnInit(): void {
  //  console.log('NgOnInit  directive');
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }


  setColor(): void {
    //this.htmlElement.nativeElement.style.color = 'red';
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
