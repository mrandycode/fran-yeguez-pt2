import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Contact } from "../contact/models/contact";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  urlCreateContact = "/api-contact-rest/contacts/create";
  urlContacts = "/api-contact-rest/contacts/";

  private httpHeaders = new HttpHeaders({
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  });

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.serverApi + this.urlContacts, {
      reportProgress: true,
    });
  }

  getContactById(id: number): Observable<Contact[]> {
    return this.http.get<Contact[]>(
      environment.serverApi + this.urlContacts + id,
      {
        reportProgress: true,
      }
    );
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(
      environment.serverApi + this.urlCreateContact,
      contact,
      { headers: this.httpHeaders }
    );
  }
}
