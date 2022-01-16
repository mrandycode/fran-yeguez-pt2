import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EquinoComponent } from "./core/equino/equino.component";
import { VolunteeringComponent } from "./core/volunteering/volunteering.component";
import { WhoAreWeComponent } from "./core/who-are-we/who-are-we.component";
import { HomeComponent } from "./shared/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "inicio", component: HomeComponent},
  { path: "voluntariado", component: VolunteeringComponent },
  { path: "quienes-somos", component: WhoAreWeComponent },
  { path: "equinoterapia", component: EquinoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
