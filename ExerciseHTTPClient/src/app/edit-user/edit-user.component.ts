import { Component } from '@angular/core';
import { UserService } from '../shared/services/userservice.service';
import { UserInfos } from '../shared/models/userInfos.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  myUserInfo:UserInfos;

  editedUser: UserInfos = {
    userId:1,
    id:1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  constructor(private myUserService: UserService) { 
    this.myUserInfo =   this.myUserService.Response;
  }


  PutUser(){
    this.myUserService.PutUser(this.editedUser, Number(this.editedUser.id));
}


}
