import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddressesComponent } from "./addresses/addresses.component";
import { ActivePrisonComponent } from "./active-prison/active-prison.component";
import { ActiveProbationParoleComponent } from "./active-probation-parole/active-probation-parole.component";
import { EmployerAddressesComponent } from "./employer-addresses/employer-addresses.component";
import { AddressSearchDetailsRoutingModule } from "./address-search-details-routing.module";
import { AddressSearchDetailsComponent } from "./address-search-details/address-search-details.component";

@NgModule({
  declarations: [
    AddressesComponent,
    ActivePrisonComponent,
    ActiveProbationParoleComponent,
    EmployerAddressesComponent,
    AddressSearchDetailsComponent
  ],
  imports: [CommonModule, AddressSearchDetailsRoutingModule]
})
export class AddressSearchDetailsModule {}
