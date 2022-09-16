import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from '../login/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // $user : Observable<User>;
  constructor(private userService : UserService, private route : Router) { }

  ngOnInit(): void {

  }

  register(form : NgForm) : void {
    this.userService.$register(form.value as User).subscribe(
      () =>{
        this.route.navigate(['/']);
      }
    )
    
  }

}
