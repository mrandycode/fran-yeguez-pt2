import { Component, OnInit } from "@angular/core";
import { AlertifyService } from "src/app/shared/services/alertify.service";
import { ContactService } from "../services/contact.service";
import { Contact } from "./models/contact";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contact: Contact = new Contact();
  contacts = new Array<Contact>();
  constructor(
    private contactService: ContactService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  createContact(): void {
    if (1==1) {
      this.contactService.createContact(this.contact)
      .subscribe((contact) => {
        this.alertifyService.alert(
          "Gracias por escribirnos " + this.contact.fullName
        );
        this.contact = contact;
        setTimeout(() => {
          this.clearForm();
        }, 2000);
      }, (err) => {
        if (err.status === 400) {
          this.alertifyService.warning(err.error.message);
        }else{
          this.alertifyService.error(err.error.message);
        }
      });
    } else {
      this.alertifyService.warning("Debe completar todos los campos.");
    }
  }

  clearForm(): void {
    this.contact = new Contact();
  }

  validateContact(): boolean {
    return (
      this.contact.fullName.length > 10 &&
      this.contact.email.length > 0 &&
      this.contact.message.length > 0
    );
  }
}
