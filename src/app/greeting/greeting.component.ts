import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit {
  greetings: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGreetings().subscribe((data)=>{
      console.log('************************************* ' + data);
      this.greetings = data['greetings'];
    });
  }

  

}
