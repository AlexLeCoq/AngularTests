import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  @HostBinding('style.BackgroundColor') myBackgroundColor : string;
  @HostBinding('style.FontSize') myFontSize : string;

  constructor() { }

  ngOnInit () {
    
  }

  @HostListener ('mouseenter') mouseEnterEvent (eventDate:Event) {
    this.myBackgroundColor = 'red';
    this.myFontSize = '30px';
  };

  @HostListener ('mouseleave') mouseLeaveEvent (eventDate:Event) {
    this.myBackgroundColor = 'transparent';
    this.myFontSize = '16px';
  }

}
