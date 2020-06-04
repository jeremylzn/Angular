import { Component } from '@angular/core';
import { UserService } from '../shared/services/userservice.service';
import { UserInfos } from '../shared/models/userInfos.model';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent{

  myUserInfo:UserInfos;

  newUser: UserInfos = {
    userId:1,
    title: "Test",
    body: "Simple Test"
  }

  constructor(private myUserService: UserService) { 
    this.myUserInfo =   this.myUserService.Response;
  }

  PostUser(){
    this.myUserService.PostUser(this.newUser);
  }


}
