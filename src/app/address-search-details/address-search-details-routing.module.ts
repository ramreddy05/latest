import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddressesComponent } from "./addresses/addresses.component";
import { ActivePrisonComponent } from "./active-prison/active-prison.component";
import { ActiveProbationParoleComponent } from "./active-probation-parole/active-probation-parole.component";
import { EmployerAddressesComponent } from "./employer-addresses/employer-addresses.component";
import { AddressSearchDetailsComponent } from "./address-search-details/address-search-details.component";

const routes: Routes = [
  {
    path: "",
    component: AddressSearchDetailsComponent,
    children: [
      { path: "addresses", component: AddressesComponent },
      { path: "active-prison", component: ActivePrisonComponent },
      { path: "active-probation", component: ActiveProbationParoleComponent },
      { path: "employer-addresses", component: EmployerAddressesComponent }
    ]
  },

  { path: "", pathMatch: "full", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressSearchDetailsRoutingModule {}
