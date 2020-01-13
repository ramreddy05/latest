import { Component, OnInit } from "@angular/core";
import { UserService } from "../Shared/api/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  searchCriteriaForm: FormGroup;
  submitted = false;
  timeout: any;
  routerChanged: boolean;
  headerDetails: any;
  isSsnMaskDisplay: boolean;
  isDobMaskDisplay: boolean;
  isSidMaskDisplay: boolean;
  isOlnMaskDisplay: boolean;
  config: { heroesUrl: string; textfile: string };
  headers: string[];
  constructor(
    readonly userService: UserService,
    private formBuilder: FormBuilder,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.userService.getHeaderDetals().subscribe(response => {
    //   console.log("response", response);
    // });

    this.searchCriteriaForm = this.formBuilder.group({
      firstName: [""],
      lastName: [""],
      middleName: [""],
      birthDate: [""],
      ssn: ["", [Validators.pattern("^[0-9]*$")]],
      fieldSID: ["", [Validators.pattern("^[0-9]*$")]],
      oln: ["", [Validators.pattern("^[a-zA-Z0-9]*$")]]
    });
  }
  // {"name":"JAMES, JABBAR ODELL","lastName":"JAMES","firstName":"JABBAR","middleName":"ODELL","fieldSSN":"175898404","fieldSID":"23248875","birthDt":"08/15/1977","recordID":10774093,"birthDate":"19770815"}
  // convenience getter for easy access to form fields
  get f() {
    return this.searchCriteriaForm.controls;
  }

  enablesDisplayMask(filedName): void {
    switch (filedName) {
      case "ssn":
        this.isSsnMaskDisplay = true;
        break;
      case "dob":
        this.isDobMaskDisplay = true;
        break;
      case "sid":
        this.isSidMaskDisplay = true;
        break;
      case "oln":
        this.isOlnMaskDisplay = true;
        break;
      default:
        break;
    }
  }
  disbaleDisplayMask(filedName): void {
    switch (filedName) {
      case "ssn":
        this.isSsnMaskDisplay = false;
        break;
      case "dob":
        this.isDobMaskDisplay = false;
        break;
      case "sid":
        this.isSidMaskDisplay = false;
        break;
      case "oln":
        this.isOlnMaskDisplay = false;
        break;
      default:
        break;
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.searchCriteriaForm.invalid) {
      return;
    }
    const formData = JSON.stringify(this.searchCriteriaForm.value);
    this.userService.setSearchFormData(this.searchCriteriaForm.value);
    this.router.navigate(["/address-search"], {
      relativeTo: this.route
    });
  }

  onReset() {
    this.submitted = false;
    this.searchCriteriaForm.reset();
  }
}
