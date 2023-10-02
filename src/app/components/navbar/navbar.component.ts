import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  MENU_ITEMS = [
    {
      name: 'Home',
      icon: '../assets/home.svg',
      current: true,
      href: '/claims',
    },
    {
      name: 'Services',
      icon: '../assets/services.svg',
      current: false,
      href: '/claims',
    },
    {
      name: 'Storage',
      icon: '../assets/storage.svg',
      current: false,
      href: '/claims',
    },
    {
      name: 'Charts',
      icon: '../assets/charts.svg',
      current: false,
      href: '/claims',
    },
    {
      name: 'Currency',
      icon: '../assets/currency.svg',
      current: false,
      href: '/claims',
    },
    {
      name: 'Base',
      icon: '../assets/base.svg',
      current: false,
      href: '/claims',
    },
    {
      name: 'Location',
      icon: '../assets/location.svg',
      current: false,
      href: '/claims',
    },
  ];
}
