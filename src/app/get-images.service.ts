import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization' : '563492ad6f91700001000001e96efd1d62204b29aa07d0f97e5e7f6a'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GetImagesService {

  constructor(private http:HttpClient) { 
    this.http = http;
  }

  getImages(category:string) : Observable<any>{
    const url = "https://api.pexels.com/v1/search?query="+category+"&per_page=39";

    return this.http.get<any>(url, httpOptions);
  }

  getImage(id:string):Observable<any>{
    const url = "https://api.pexels.com/v1/photos/"+id;
    return this.http.get<any>(url, httpOptions);
  }
}
