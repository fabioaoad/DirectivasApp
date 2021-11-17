import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {


  htmlElement    : ElementRef<HTMLElement>;
  @Input() color : string = 'red';


  constructor( private  elem: ElementRef<HTMLElement>) {
  // console.log('contructor directive');
  // console.log(elem);
  //elem.nativeElement.style.color = 'red';
    this.htmlElement = elem;
  }

  ngOnInit(): void {
  //  console.log('NgOnInit  directive');
    this.setColor();
  }





  setColor(): void {
    //this.htmlElement.nativeElement.style.color = 'red';
    this.htmlElement.nativeElement.style.color = this.color;
  }


}
