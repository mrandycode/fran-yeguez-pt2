import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Voluntary } from '../volunteering/models/voluntary';

@Injectable({
  providedIn: 'root'
})
export class VoluntaryService {
  urlCreateVoluntary = "/api-contact-rest/voluntaries/create";
  urlVoluntaries = "/api-contact-rest/voluntaries/";

  private httpHeaders = new HttpHeaders({
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  });

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Voluntary[]> {
    return this.http.get<Voluntary[]>(environment.serverApi + this.urlVoluntaries, {
      reportProgress: true,
    });
  }

  getVoluntaryById(id: number): Observable<Voluntary[]> {
    return this.http.get<Voluntary[]>(
      environment.serverApi + this.urlVoluntaries + id,
      {
        reportProgress: true,
      }
    );
  }

  createVoluntary(voluntary: Voluntary): Observable<Voluntary> {
    return this.http.post<Voluntary>(
      environment.serverApi + this.urlCreateVoluntary,
      voluntary,
      { headers: this.httpHeaders }
    );
  }
}
