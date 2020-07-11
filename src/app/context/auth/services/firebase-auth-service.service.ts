import { Injectable } from '@angular/core';
import { AuthService } from '../domain/auth_service';

//Firebase
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "@firebase/auth-types";

//RXJS
import { Observable } from 'rxjs';
import { map, first,  } from 'rxjs/operators';
import { Email } from '../domain/email';
import { Password } from '../domain/password';
import { AutenticatedUser } from '../domain/authenticated_user';
import { UserAuthId } from '../domain/user_auth_id';
import { auth } from 'firebase';

@Injectable()
export class FirebaseAuthService implements AuthService {

  constructor(private firebaseAuth: AngularFireAuth) {

  }

  async userId():Promise<string>{
    const firebaseUser :User= await this.firebaseAuth.currentUser;
    return firebaseUser.uid;
  }

  currentUser(): Observable<AutenticatedUser|null>{
    return this.firebaseAuth.user.pipe(map((user: User) => user ? new AutenticatedUser(new UserAuthId(user.uid), new Email(user.email)) : null));
  }

  async userIsAuthenticated(): Promise<boolean> {
    return await this.firebaseAuth.user.pipe(first()).toPromise() != null;
  }

  async logging(email: Email, password: Password): Promise<void> {
    this.firebaseAuth.signInWithEmailAndPassword(email.value,password.value);
  }
 
  async logout(): Promise<void> {
    await this.firebaseAuth.signOut();
  }

}
