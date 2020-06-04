import { Component } from '@angular/core';
import { UserService } from '../shared/services/userservice.service';
import { UserInfos } from '../shared/models/userInfos.model';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  
  id:number=1;
    
  constructor(private myUserService: UserService) {}


  DeleteUser(){
      this.myUserService.DeleteUser(this.id);
  }


}
