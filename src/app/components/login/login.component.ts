import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  user: string = '';
  password: string = '';

  error: string = '';
  loading: boolean = false;
  submitted = false;
  
  constructor(private auth: AngularFireAuth, private router:Router) {

  }

  onSubmit() {
    this.login(this.user, this.password);
  }


  async login(email: string, password: string) {
    try {
      this.loading = true;
      await this.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['home']);
    } catch (error) {
      this.loading = false;
      console.log(error['code']);
      switch (error['code']) {
        case "auth/user-not-found":
          this.error = "El usuario no se encuentra registrado" ;
          break;
        default:
          this.error = "El usuario o contrasena son incorrectos";
          break;
      }
    }
  }

}
