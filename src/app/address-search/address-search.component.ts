import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { UtilsService } from "../Shared/api/utils/utils.service";
import { UserService } from "../Shared/api/user.service";
import { SearchFormModel } from "../Shared/models/search-form.model";
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: "app-address-search",
  templateUrl: "./address-search.component.html",
  styleUrls: ["./address-search.component.css"]
})
export class AddressSearchComponent implements OnInit {
  @ViewChild("pdfTable", { static: false }) pdfTable: ElementRef;
  routerChanged: boolean;
  formData: any;
  persons: any;

  constructor(
    readonly utilsService: UtilsService,
    readonly userService: UserService
  ) {}

  ngOnInit() {
    this.formData = this.userService.getSearchFormData();
    // this.formData = {
    //   ori: "",
    //   attention: "testuser, vnelluri",
    //   fieldSID: "232-48-87-5",
    //   purpose: "",
    //   reason: ""
    // };
    this.routerChanged = true;
    this.userService.getSummary(this.formData).subscribe(response => {
      this.routerChanged = false;
      this.persons = response.persons;
    });
  }

  downloadAsPDF() {
    const doc = this.utilsService.createPDF(this.pdfTable);
    doc.save("tableToPdf.pdf");
  }

  getUserDetails(personObj: any) {
    this.userService.setData(personObj, "personData");
  }

  viewAsPDF() {
    const doc = this.utilsService.createPDF(this.pdfTable);
    window.open(doc.output("bloburl"), "_blank");
  }
}
