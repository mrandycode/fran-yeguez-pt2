import { Component, OnInit } from "@angular/core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-my-services",
  templateUrl: "./my-services.component.html",
  styleUrls: ["./my-services.component.css"],
})
export class MyServicesComponent implements OnInit {
  automaticTime = 20000;
  animation = 'back_in_right';
  position = 0;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;
  services = [
    {
      title: "Sé parte deAtletas por la vida",
      description:
        "Nuestro Club Deportivo promueve la inclusión" +
        "de las personas a través de la práctica y el desarrollo deportivo, " +
        "permitiéndoles transformar su entorno social y consolidar sus proyectos " +
        "de vida como deportistas convencionales " +
        "y paralímpicos.",
      image: "http://fundacionada.org/img/ADA/img_deporte1.png",
      show: true,
    },
    {
      title: "Servicio Nro 2",
      description:
        "Nuestro Club Deportivo promueve la inclusión" +
        "de las personas a través de la práctica y el desarrollo deportivo," +
        "permitiéndoles transformar su entorno social y consolidar sus proyectos " +
        "de vida como deportistas convencionales " +
        "y paralímpicos.",
      image: "http://fundacionada.org/img/ADA/img_deporte2.png",
      show: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.automaticNext();
  }

  automaticNext(): void {
    setInterval(() => {
      // this.animation = 'animate__animated animate__delay-3s animate__backInRight';
      this.animation = 'back_in_right';
      this.next();
      this.automaticTime = 20000;
    }, this.automaticTime);
  }

  next(): void {
    // this.animation = 'andy_custom';
    // this.automaticTime = 12000;
    if (this.position === this.services.length - 1) {
      this.position = 0;
    } else {
      this.position = this.position + 1;
    }
  }

  back(): void {
    // this.animation = 'andy_custom';
    // this.automaticTime = 12000;
    if (this.position === this.services.length) {
      this.position = this.services.length - 1;
    } else if (this.position === 0) {
      this.position = this.services.length - 1;
    } else {
      this.position = this.position - 1;
    }
  }
}
