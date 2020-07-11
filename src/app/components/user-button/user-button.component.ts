import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/context/auth/domain/auth_service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AutenticatedUser } from 'src/app/context/auth/domain/authenticated_user';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css'],
})
export class UserButtonComponent implements OnInit {

  _showMenu: boolean;
  _currentUser:AutenticatedUser;

  constructor(public authService:AuthService , private router:Router) { }

  ngOnInit(): void {
    this.authService.currentUser().then((user)=>{
      this._currentUser = user;
    })
  }



  get currentUser():AutenticatedUser{
    return this._currentUser;
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
