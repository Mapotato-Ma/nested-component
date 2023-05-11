import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExpandAnimation]',
})
/**
 * 收起展开指令，应用于需要收起展开的元素，传入收起展开标识位
 */
export class ExpandAnimationDirective {
  constructor(
    private elementRef: ElementRef<HTMLElement>, // 宿主元素
    private renderer: Renderer2 // 修改样式
  ) {
    // 初始化设置元素的2D变换原点以及过渡效果
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'grid');
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transition',
      'grid-template-rows 233ms ease-in-out'
    );
  }
  // 宿主组件应用进来的展开状态
  @Input('expandedFlag') expandedFlag!: boolean;

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement.firstElementChild,
      'overflow',
      'hidden'
    );
    this.refreshExpandStatus();
  }

  ngOnChanges() {
    this.refreshExpandStatus();
  }

  refreshExpandStatus() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'grid-template-rows',
      this.expandedFlag ? '1fr' : '0fr'
    );
  }
}
