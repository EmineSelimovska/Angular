import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './types/themes';
import { Posts } from './types/posts';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes(){

    const {appUrl} = environment
    
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }
  getPost(limit?: number){
    
    const {appUrl} = environment
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Posts[]>(`${appUrl}/posts${limitFilter}`);
  }
}
