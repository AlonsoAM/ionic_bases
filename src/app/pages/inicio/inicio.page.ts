import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'leaf-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'rocket-outline',
      name: 'Buttons',
      redirectTo: '/botons',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-done-outline',
      name: 'CheckBox',
      redirectTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time',
    },
    {
      icon: 'flame-outline',
      name: 'Fab',
      redirectTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinit',
    },
    {
      icon: 'albums-outline',
      name: 'Input Forms',
      redirectTo: '/input',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
