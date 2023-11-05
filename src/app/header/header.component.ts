import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route: Router,private auth:OauthService)
  {}

  gohome(){
    this.route.navigate(['home']);

  }

  logout(){
    this.route.navigate(['login']);
  }

}
