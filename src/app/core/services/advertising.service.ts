import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Images } from '../advertinsing/models/advertising';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {
  readonly urlEndpoint = 'https://picsum.photos/v2/list?page=';

  constructor(private http: HttpClient) {
  }

  getImagesAdvertising(page: number): Observable<Images[]> {
    return this.http.get<Images[]>(this.urlEndpoint + page + '&limit=3', { reportProgress: true });
  }
}
