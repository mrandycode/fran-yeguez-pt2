import { Component, OnInit } from "@angular/core";
import { AlertifyService } from "src/app/shared/services/alertify.service";
import { VoluntaryService } from "../services/voluntary.service";
import { Voluntary } from "./models/voluntary";

@Component({
  selector: "app-volunteering",
  templateUrl: "./volunteering.component.html",
  styleUrls: ["./volunteering.component.css"],
})
export class VolunteeringComponent implements OnInit {
  voluntary: Voluntary = new Voluntary();
  readonly voluntariesType = [
    {
      id: 1,
      name: "Deportivo",
    },
    {
      id: 2,
      name: "Comunidad",
    },
    {
      id: 3,
      name: "Salud",
    },
    {
      id: 4,
      name: "Motivacional",
    },
    {
      id: 5,
      name: "Otro",
    },
  ];

  constructor(
    private voluntaryService: VoluntaryService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {}

  createVoluntary(): void {
    console.log("crear voluntario");
    if (1 === 1) {
      this.voluntaryService.createVoluntary(this.voluntary).subscribe(
        (voluntary) => {
          this.alertifyService.alert(
            "Gracias por escribirnos " + this.voluntary.fullName
          );
          this.voluntary = voluntary;
          setTimeout(() => {
            this.clearForm();
          }, 2000);
        },
        (err) => {
          if (err.status === 400) {
            this.alertifyService.warning(err.error.message);
          }else{
            this.alertifyService.error(err.error.message);
          }
        }
      );
    } else {
      this.alertifyService.warning("Debe completar todos los campos");
    }
  }

  clearForm(): void {
    this.voluntary = new Voluntary();
  }

  validateVoluntary(): boolean {
    return (
      this.voluntary.fullName.length > 1 &&
      this.voluntary.email.length > 0 &&
      this.voluntary.message.length > 0 &&
      this.voluntary.voluntaryType > 0
    );
  }
}
