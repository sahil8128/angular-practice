import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(private http:HttpClient){}
  name = 'Angular ' + VERSION.major;
  newPlayer = {name : "Sahil"};

    getData(){
    this.http.get('https://my-json-server.typicode.com/sahil8128/ausplayers/players')
    .toPromise()
    .then(val => console.log("Success : ", val))
    .catch(val => console.log("Failure : ",val));

    console.log("Hello");
    this.fun();
  }

  // getData(){
  //   this.http.get('https://my-json-server.typicode.com/sahil8128/ausplayers/players').subscribe(data => {
  //     console.log(data[0]);
  //   });
  //   console.log("Hello");
  //   this.fun();
  // }

  postData(){
    this.http.post('https://my-json-server.typicode.com/sahil8128/ausplayers/players',this.newPlayer).subscribe(res => {
      if (res.hasOwnProperty("id")){
        console.log("New Player Added to Squad");
      }
      else{
        console.log("Some error occured");
      }
    });
    console.log("Posting");
    this.fun();
  }

  fun(){
     console.log("Inside Function");
  }
}