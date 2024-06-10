import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { FirebaseUserModel } from './user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class UserService {

  constructor(private auth:AngularFireAuth){}


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      this.auth.onAuthStateChanged(function(user){
        let userModel = new FirebaseUserModel();
        if (user) {
          if(user.providerData[0].providerId == 'password'){
            //use a default image
            userModel.name = user.displayName;
            userModel.provider = user.providerData[0].providerId;
            return resolve(userModel);
          }
          else{
            userModel.name = user.displayName;
            userModel.provider = user.providerData[0].providerId;
            return resolve(userModel);
          }
        } else {
          reject('No user logged in');
        }
      })
    })
  }
}
