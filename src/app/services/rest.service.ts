import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public host:string = environment.urlBurguerQueen;
  token = sessionStorage.getItem('token');
  constructor(private http: HttpClient) { }
  httpOptions = () => (
    { headers: new HttpHeaders (
        {
          'Content-Type': 'application/json',
          'access-token': `${this.token}`,
        })
    });


    public getById = (url:string,id:number) => this.http.get<any>(`${this.host}/${url}/${id}`, this.httpOptions());

    public get = (url:string) => this.http.get<any>(`${this.host}/${url}`, this.httpOptions());

    public post = (url:string, data:any) => this.http.post<any>(`${this.host}/${url}`,data, this.httpOptions());

    public put = (url:string, data:any, id:number) => this.http.put<any>(`${this.host}/${url}/${id}`,data, this.httpOptions());

    public delete = (url:string, id:number) => this.http.delete<any>(`${this.host}/${url}/${id}`, this.httpOptions());

}
