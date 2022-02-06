import { Injectable } from "@angular/core";
declare let alertify: any;

@Injectable({
  providedIn: "root",
})
export class AlertifyService {
  constructor() {}

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, function (e: string) {
      if (e) {
        okCallBack();
      } else {
      }
    });
  }

  alert(mensaje: string): void {
    alertify
      .alert()
      .setting({
        title: "Contactanos",
        label: "Ok",
        message: mensaje,
        onok: function () {
          alertify.success("Información Guradada");
        },
      })
      .show();
  }

  success(message: string): void {
    alertify.success(message);
  }

  error(message: string): void {
    alertify.error(message);
  }
  warning(message: string): void {
    alertify.warning(message);
  }
  message(message: string): void {
    alertify.message(message);
  }

}
