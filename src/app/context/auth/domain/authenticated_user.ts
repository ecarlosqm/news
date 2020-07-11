import { Email } from './email';
import { UserAuthId } from './user_auth_id';

export class AutenticatedUser {
    readonly id:UserAuthId;
    readonly email:Email;

    constructor(id:UserAuthId, email:Email){
        this.id = id;
        this.email = email;
    }
}