import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

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
    private router: Router,
    private auth: AuthService
  ) {}

  logout(): void {
    this.auth.logout();
    alert("Kijelentkeztél")
    // this.router.navigate(['admin'])
  }

}
