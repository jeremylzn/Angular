import { Component, OnInit } from '@angular/core';
import { Api } from '../shared/models/api.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public  apiList:Api[];

  constructor(private apiService:ApiService) {
    this.apiList=this.apiService.apiList;
  }

  public saveCountry(newName:string):void{
    let c:Api=this.apiList.find(e=>e.name==newName);

    this.apiService.selectedCountry.name=c.name;
    this.apiService.selectedCountry.flag=c.flag;
  }
  ngOnInit(): void {
  }



}
