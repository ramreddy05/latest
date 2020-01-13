import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";
import { AddressSearchComponent } from "./address-search/address-search.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LayoutModule } from "./layout/layout.module";
import { TransactionInformationComponent } from "./transaction-information/transaction-information.component";
import { UtilsService } from "./Shared/api/utils/utils.service";
import { UserService } from "./Shared/api/user.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";

import { ReversePhoneSearchComponent } from "./reverse-phone-search/reverse-phone-search.component";
import { ReverseAddressSearchComponent } from "./reverse-address-search/reverse-address-search.component";
import { PageNotFoundComponent } from "./Shared/components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    AddressSearchComponent,
    SidebarComponent,
    TransactionInformationComponent,
    ReversePhoneSearchComponent,
    ReverseAddressSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UtilsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
