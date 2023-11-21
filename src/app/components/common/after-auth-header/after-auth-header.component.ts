import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-after-auth-header',
  templateUrl: './after-auth-header.component.html',
  styleUrls: ['./after-auth-header.component.css']
})
export class AfterAuthHeaderComponent {
  constructor(private renderer: Renderer2) {
  }

  toggleSidebar() {

    const bodyElement = document.body; // Get the body element

    if (bodyElement.classList.contains('toggle-sidebar')) {
      // The 'toggle-sidebar' class is applied to the body
      this.renderer.removeClass(document.body, 'toggle-sidebar');

    } else {
      // The 'toggle-sidebar' class is not applied to the body
      this.renderer.addClass(document.body, 'toggle-sidebar');
    }

  }

  ngOnInit(): void {
  }
}
