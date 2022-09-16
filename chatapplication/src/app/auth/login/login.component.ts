import { state } from '@angular/animations';
import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, observable, Observable, of } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  // $user : Observable<User>
  // public loginSubject = new BehaviorSubject<boolean>(false);
  // loginSubject$ = this.loginSubject.asObservable()
  
  constructor(private userService : UserService, private route : Router ) { }

  ngOnInit(): void {
     
  }

  login(form : NgForm) : void {
    this.userService.$login(form.value as User).subscribe(
      (response : User) =>{
        // console.log("test")
        if(response === null) {
          alert("Username or password is wrong");
          
        }else{
          // this.loginSubject.next(true);
          this.userService.setAuthenticated(true);
          console.log("abc",response,typeof(response));
          this.route.navigate(['/home' ],{state:{data:response}});
          // {queryParams : response}
       
        }
        
        form.resetForm();
      }
    
    )
    // console.log(form.value as User );
    // this.$user = this.userService.$login(form.value as User).pipe(
    //   map(( response : User) => {
        
    //     console.log("test")
    //     if(response === null) {
    //       alert("Username or password is wrong");
    //     }else{
    //       // this.loginSubject.next(true);
          
    //       this.route.navigate(['/home'])
          
    //     }
    //     form.resetForm();
    //     return response
    //   })

    // )
  }

  





}
