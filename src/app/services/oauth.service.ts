import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor() { }

  login_(uname:string,pword:string){
    if(uname === "admin" && pword ==="1234"){
      return 403;
    }
    else{
      return 200;
    }
  }
}
