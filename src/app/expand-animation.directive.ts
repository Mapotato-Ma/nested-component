import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

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
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transition',
      'all 233ms ease-in-out'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transformOrigin',
      'center top'
    );
  }
  // 宿主组件应用进来的展开状态
  @Input('expandedFlag') expandedFlag!: boolean;

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'height',
      this.expandedFlag ? 'auto' : '0'
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.renderDom();
  }

  renderDom() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'transform',
      this.expandedFlag ? 'scaleY(1)' : 'scaleY(0)'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'opacity',
      this.expandedFlag ? '1' : '0'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'height',
      this.expandedFlag ? 'auto' : '0'
    );
  }
}
