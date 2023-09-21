import { Component } from '@angular/core';

@Component({
  selector: 'ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.scss'],
})
export class NavbarComponent {
  MENU_ITEMS = [
    { name: 'Home', icon: "../assets/home.svg", current: true },
    { name: 'Services', icon: "../assets/services.svg", current: false },
    { name: 'Storage', icon: "../assets/storage.svg", current: false },
    { name: 'Charts', icon: "../assets/charts.svg", current: false },
    { name: 'Currency', icon: "../assets/currency.svg", current: false },
    { name: 'Base', icon: "../assets/base.svg", current: false },
    { name: 'Location', icon: "../assets/location.svg", current: false },
  ];
}
