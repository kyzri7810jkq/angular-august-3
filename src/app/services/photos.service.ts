import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from '../models/Photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  JSON_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Photos>{
    let params = { albumId: '1'}
    return this.http.get<Photos>(this.JSON_URL, {params});
  }

  
  getPhotoItem(id: any): Observable<Photos>{
    let params = {id: id };
    return this.http.get<Photos>(this.JSON_URL, { params });
  }
}
