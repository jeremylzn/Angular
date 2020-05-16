import { Component, OnInit } from '@angular/core';
import { Api } from '../shared/models/api.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  public country:Api;

  constructor(private apiService:ApiService) {
    this.country=this.apiService.selectedCountry;

  }

  ngOnInit(): void {
  }

}
