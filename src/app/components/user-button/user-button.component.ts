import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/context/auth/domain/auth_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {

  _showMenu: boolean;

  constructor(private authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    
  }

  togleShowMenu(): void {
    this._showMenu = !this.showMenu;
  }

  get showMenu(): boolean {
    return this._showMenu;
  }

  async closeSession(){
    await this.authService.logout();
    this.router.navigate(['login']);
  }

}
