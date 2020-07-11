import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';
  passwordConfirm: string = '';

  error: string = '';
  loading: boolean = false;
  submitted = false;
  
  constructor(private auth: AngularFireAuth, private router:Router) {

  }

  onSubmit() {
    this.signin(this.email, this.password);
  }


  async signin(email: string, password: string) {
    try {
      this.loading = true;
      await this.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['login']);
    } catch (error) {
      this.loading = false;
      console.log(error['code']);
      switch (error['code']) {
        case "auth/email-already-in-use":
          this.error = "Este correo ya se encuentra registrado" ;
          break;
        default:
          this.error = "Ocurrio un error. Por favor, intentalo mas tarde";
          break;
      }
    }
  }

}
