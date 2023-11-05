import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { passwordValidator } from '../Validators/password.validators';
import { OauthService } from '../services/oauth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string = ''; 
  password:string = '';
  errormessage:string = '';

  form:FormGroup;

  constructor(fb:FormBuilder,private oauthService:OauthService,private router:Router) { 

    this.form = fb.group({
      username: ['',[Validators.required,Validators.minLength(3)]],
      password: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get fc(){
    return this.form.controls;
  }

  login(){
    let res=this.oauthService.login_(this.username,this.password);
    console.log(this.username);
    console.log(res);
    if(res === 200){
      console.log('Login Success');
      this.router.navigate(['home']);
    }
    if(res === 403){
      this.errormessage = 'Invalid Credentials';
      console.log(this.errormessage);
    }
  }

  

}
