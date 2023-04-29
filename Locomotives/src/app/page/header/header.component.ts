import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = this.config.menuItems;
  visibility: boolean = false;
  
  constructor(
    private config: ConfigService,
    private router: Router,
    private auth: AuthService
    ) { }
    
    ngOnInit(): void {
    }
    
    login(): void {
      event?.preventDefault()
      this.visibility = true;
      this.router.navigate(['login'])
      console.log(this.visibility)
  }

  logout(): void {
    this.auth.logout();
    alert("Kijelentkeztél")
    this.visibility = false;
    // this.router.navigate(['admin'])
  }

}
