import { Injectable } from '@angular/core';

export interface IMenuItem {
  url: string;
  text: string;
  disabled?: boolean;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  menuItems: IMenuItem[] = [
    {url: '/', text: 'Főoldal', icon:'home'},
    {url: '/dízel', text: 'Dízelmozdonyok', icon: 'directions_transit'},
    {url: '/villamos', text: 'Villamosmozdonyok', icon: 'tram'},
    {url: '/vásárlás', text: 'Vásárlás', icon: 'shopping_cart'},
    {url: '/komment', text: 'Kommentek', icon: 'edit_note'},
    {url: '/admin', text: 'Admin', icon: 'settings_suggest'},
  ]

  constructor() { }
}
