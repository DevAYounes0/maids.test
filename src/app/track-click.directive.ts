import { Directive, ElementRef } from '@angular/core';
let lastClick: MouseEvent;

@Directive({
  selector: '[routerLink]',
  standalone: true,
})
export class LinkClickTracker {
  constructor(element: ElementRef) {
    element.nativeElement.addEventListener(
      'click',
      (e: MouseEvent) => (lastClick = e),
      true
    );
    
  }
}
