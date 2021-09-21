import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ApiService} from './api.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
export class Greeting{
  constructor(
    public language: string, 
    public greeting: string
  ){
    
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  title = 'brendanAngularAssessment';
  public nameForm:FormGroup;
  myusername: string = "";
  constructor( private formBuilder: FormBuilder, private httpClient: HttpClient,private api:ApiService) {
    this.nameForm = this.formBuilder.group({
      name: ''
    });
  }
  clickme() {
    this.myusername=this.nameForm.get('name')?.value;
    console.log('it does nothing', this.nameForm.get('name'));
  }

  greetings!: Greeting[];

  ngOnInit(){
     this.getGreeting();
   }

   getGreeting(){
     this.httpClient.get<any>('http://localhost:8088/greetingService/greetings/xhosa').subscribe(
        response => {
             console.log(response);
              this.greetings = response;
         }
     );
  }
  }
