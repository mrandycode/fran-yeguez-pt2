import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommunityProgressComponent } from "./core/community-progress/community-progress.component";
import { EquinoComponent } from "./core/equino/equino.component";
import { GotoSchoolComponent } from "./core/goto-school/goto-school.component";
import { HealthAndFeedingComponent } from "./core/health-and-feeding/health-and-feeding.component";
import { VolunteeringComponent } from "./core/volunteering/volunteering.component";
import { WhoAreWeComponent } from "./core/who-are-we/who-are-we.component";
import { HomeComponent } from "./shared/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "inicio", component: HomeComponent},
  { path: "voluntariado", component: VolunteeringComponent },
  { path: "quienes-somos", component: WhoAreWeComponent },
  { path: "equinoterapia", component: EquinoComponent },
  { path: "vamos-a-la-escuela", component: GotoSchoolComponent },
  { path: "nutricion-y-salud", component:  HealthAndFeedingComponent},
  { path: "desarrollo-comunitario", component:  CommunityProgressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
