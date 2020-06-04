import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfos } from '../models/userInfos.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public Response:UserInfos;

  constructor(private myHttpClient: HttpClient) { 
    this.myHttpClient
      .get<UserInfos>("https://jsonplaceholder.typicode.com/posts/1")
      .subscribe(
          res => {
              this.Response = res;
          },
          err=>{console.log(err)}
      )
}

public PostUser(newUser:UserInfos){
  this.myHttpClient
      .post<UserInfos>("https://jsonplaceholder.typicode.com/posts", newUser)
      .subscribe(
          res => {
             this.Response=res
          },
          err=>{console.log(err)}
      )
}

public PutUser(PutUser:UserInfos,id:number) {
  this.myHttpClient
      .put<UserInfos>(`https://jsonplaceholder.typicode.com/posts/${id}`,PutUser)
      .subscribe(
          res => {this.Response=res;},
          err=>{console.log(err)}
      )
}

public DeleteUser(id:number) {
  this.myHttpClient
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(
          res => {console.log(res)},
          err=>{console.log(err)}
      )
}


}
