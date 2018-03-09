import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRenderigDirective]'
})
export class RenderigDirectiveDirective implements OnInit {

  @HostBinding('style.background') background: string;
  @Input('appRenderigDirective') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(){
    this.background = this.hoverColor;
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    this.renderer.addClass(this.element.nativeElement, 'white-text');

  }

  @HostListener('mouseleave') mouseLeave(){
    this.background = this.defaultColor;
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    this.renderer.removeClass(this.element.nativeElement, 'white-text');

  }
}
