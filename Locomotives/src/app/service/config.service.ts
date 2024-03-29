import { Injectable } from '@angular/core';

export interface IMenuItem {
  url: string;
  text: string;
  disabled?: boolean;
  icon?: string;
  click?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  menuItems: IMenuItem[] = [
    {url: '/', text: 'Főoldal', icon:'home'},
    {url: '/dízel', text: 'Dízelmozdonyok', icon: 'directions_transit', disabled: true},
    {url: '/villamos', text: 'Villamosmozdonyok', icon: 'tram'},
    {url: '/vásárlás', text: 'Vásárlás', icon: 'shopping_cart'},
    {url: '/komment', text: 'Kommentek', icon: 'edit_note'},
    {url: '/admin', text: 'Admin', icon: 'settings_suggest'},
    // {url: '/login', text: 'Bejelentkezés', icon: 'input'},
    // {url: '/', text: 'Kijelentkezés', icon: 'output', click: 'logout()'},
  ]

  constructor() { }
}


