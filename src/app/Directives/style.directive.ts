import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
   // el.nativeElement.style.color = 'red';
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }

  //при наведении на параграф, он меняет цвет
  @HostListener('mouseenter', ['$event']) onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue');
    this.r.setStyle(this.el.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseleave', ['$event']) onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
  }
}
