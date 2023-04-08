import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Locomotives';
  menuItems = this.config.menuItems;

  constructor(
    private config: ConfigService,
    private router: Router
  ) {}

  logout() {
    alert("Kijelentkeztél")
    // this.router.navigate(['admin'])
  }

}
