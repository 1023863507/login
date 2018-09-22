import { AngularFireAuth } from 'angularfire2/auth';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
const indetifier = "token";
@Injectable()
export class Authentication {
    public token: string;
    constructor(private angularAuth : AngularFireAuth){
        this.setUp();
    }

logOut(){
    return this.angularAuth.auth.signOut().then(()=>{
        this.token=null
    })
}

setUp(){
    this.token = this.getTokentFromLS();
    console.log("Escuchando el observador")
    this.angularAuth.authState.subscribe((firebaseUser)=>{
    console.log(firebaseUser);
    if (firebaseUser){
        localStorage.setItem(indetifier, firebaseUser.uid);
        this.token= firebaseUser.uid;
            } else {
                localStorage.removeItem(indetifier);
                this.token= null;               
            }
        })
}
getTokentFromLS() :string{
   return localStorage.getItem(indetifier)
}

createUserWhithEmailAndPassword(email,password){
   return this.angularAuth.auth.createUserWithEmailAndPassword(email,password);
}

createUserWhithGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
       return this.createUserWhithProvider(provider)
}

createUserWhithFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    return this.createUserWhithProvider(provider)
    
}

createUserWhithProvider(provider){
   
    return this.angularAuth.auth.signInWithRedirect(provider)
    .then(result=>{
        return firebase.auth().getRedirectResult;
    });
}

}