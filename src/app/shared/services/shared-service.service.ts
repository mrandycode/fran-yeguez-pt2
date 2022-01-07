import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedServiceService {
  showHome$ = new Subject<boolean>();
  constructor() {}

  switchHome(stateCurrent: boolean): boolean {
    // const value = stateCurrent ? false : true;
    this.showHome$.next(stateCurrent);
    return stateCurrent;
  }
}
