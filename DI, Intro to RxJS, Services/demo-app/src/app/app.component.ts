//import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from './type/JsonPlaceholderUser';
import { UserService } from './user.service';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers: [userService] not global
})
export class AppComponent implements OnInit{
  title = 'demo-app';
  appUsers: User[]= [];
  isLoading = true;

  constructor(public userService: UserService){
    this.appUsers = this.userService.users
  }

  ngOnInit(){
  // this.userService.getUsers().then((users) => {
   // this.appUsers = users;
   // this.isLoading = false;
    
 //  })
 this.userService.getUsers().subscribe((users) => {
  this.appUsers = users;
   this.isLoading = false;
});
  }

    
    setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
      this.userService.addUser(inputName, inputAge);
      this.appUsers = this.userService.users;
    }
  
}

