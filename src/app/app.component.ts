import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginapidoc';
  
  constructor(private service: AppServiceService) {}
  ngOnInit(): void {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.service.getData().subscribe((response) => {
      console.log('Response from Api', response);
    }, (error) => {
      console.log('Error is ', error)
    })
  }
}
