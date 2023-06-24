import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyle: {border?: string, borderRadius?: string} = {};
  constructor(private el: ElementRef, private r: Renderer2) {
   // el.nativeElement.style.color = 'red';
  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }

  //при наведении на параграф, он меняет цвет
  @HostListener('mouseenter', ['$event']) onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.color);
    this.r.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius);
  }

  @HostListener('mouseleave', ['$event']) onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'cursor', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
