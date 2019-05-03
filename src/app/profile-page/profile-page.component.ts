import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  Data: Observable<Array<any>>;

  public getJSON(): Observable<any> {
    return this.http.get('.././../assets/birds.json');
}



  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.Data = data;
      console.log(JSON.stringify(this.Data));
  });
  }



  ngOnInit() {
  }

}
