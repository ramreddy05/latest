import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { UtilsService } from "../../Shared/api/utils/utils.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/Shared/api/user.service";

@Component({
  selector: "app-address-search-details",
  templateUrl: "./address-search-details.component.html",
  styleUrls: ["./address-search-details.component.css"]
})
export class AddressSearchDetailsComponent implements OnInit {
  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  activeClass: string;
  personData: any;
  addresses: any;
  prison: any;
  probation: any;
  employment: any;
  routerChanged: boolean;
  constructor(
    readonly route: ActivatedRoute,
    readonly router: Router,
    readonly utilsService: UtilsService,
    readonly userService: UserService
  ) {}

  ngOnInit() {
    this.personData = this.userService.getData("personData");
    this.activeClass = "addresses";
    this.routerChanged = true;
    this.userService.getDetails(this.personData).subscribe(response => {
      this.addresses = response["address"];
      this.prison = response["prison"];
      this.probation = response["probation"];
      this.employment = response["employment"];
      console.log( this.addresses,this.prison,this.probation, this.employment)

      this.userService.setData(this.addresses, "address");
      this.userService.setData(this.prison, "prison");
      this.userService.setData(this.probation, "probation");
      this.userService.setData(this.employment, "employment");
      this.loadPrisonDetails("addresses");
      this.routerChanged = false;
    });
  }

  loadPrisonDetails(path): void {
    this.activeClass = path;
    this.router.navigate([path], {
      relativeTo: this.route
    });
  }
  showDisclaimer(): void {}

  downloadAsPDF() {
    const doc = this.utilsService.createPDF(this.pdfTable);
    doc.save("tableToPdf.pdf");
  }

  // viewAsPDF() {
  //   const doc = this.utilsService.createPDF(this.pdfTable);
  //   window.open(doc.output("bloburl"), "_blank");
  // }
}
