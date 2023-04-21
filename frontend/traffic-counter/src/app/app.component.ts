import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traffic-counter';
  baseUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("app component init");
    this.http.get(this.baseUrl).subscribe((data: any) => {
      console.log(data);
    });
  }
}
