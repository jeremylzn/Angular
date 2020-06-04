import { Component} from '@angular/core';
import { UserService } from '../shared/services/userservice.service';
import { UserInfos } from '../shared/models/userInfos.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  constructor(public MyGetUsers: UserService) {

   }


}
