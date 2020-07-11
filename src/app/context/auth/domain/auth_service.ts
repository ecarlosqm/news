import { logging } from "protractor";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Email } from './email';
import { Password } from './password';
import { AutenticatedUser } from './authenticated_user';

@Injectable()
export abstract class AuthService {
    abstract logging(email: Email, password: Password): Promise<void>;
    abstract logout(): Promise<void>;
    abstract userId():Promise<string>;
    abstract currentUser(): Promise<AutenticatedUser|null>
    abstract userIsAuthenticated():Promise<boolean>;
}