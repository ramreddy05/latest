import { ReverseAddressSearchComponent } from "./reverse-address-search/reverse-address-search.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddressSearchComponent } from "./address-search/address-search.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { ReversePhoneSearchComponent } from "./reverse-phone-search/reverse-phone-search.component";
import { PageNotFoundComponent } from "./Shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "address-search", component: AddressSearchComponent },
  { path: "search-criteria", component: SearchCriteriaComponent },
  {
    path: "address-search-details",
    loadChildren: () =>
      import("./address-search-details/address-search-details.module").then(
        mod => mod.AddressSearchDetailsModule
      )
  },
  { path: "reverse-address-search", component: ReverseAddressSearchComponent },
  { path: "reverse-phone-search", component: ReversePhoneSearchComponent },
  { path: "", pathMatch: "full", redirectTo: "/search-criteria" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
