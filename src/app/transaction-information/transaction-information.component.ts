import { Component, OnInit } from "@angular/core";
import { UserService } from "../Shared/api/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-transaction-information",
  templateUrl: "./transaction-information.component.html",
  styleUrls: ["./transaction-information.component.css"]
})
export class TransactionInformationComponent implements OnInit {
  transactionInfoForm: FormGroup;
  submitted: boolean;
  userRole: string;
  constructor(
    readonly userService: UserService,
    readonly formBuilder: FormBuilder,
    readonly router: Router,
    readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.transactionInfoForm = this.formBuilder.group({
      attention: [""],
      ori: [""],
      purpose: [""],
      reason: [""]
    });

    this.userService.getHeaderDetals().subscribe(response => {
      console.log("response", response.userName);
      this.userRole = response.userRole;

      this.transactionInfoForm.controls["attention"].setValue(
        response.userName
      );
      this.transactionInfoForm.controls["ori"].setValue(
        response.userORI
      );
      this.transactionInfoForm.controls["purpose"].setValue(
        response.purpose
      );
      this.transactionInfoForm.controls["reason"].setValue(
        response.reason
      );
    });
  }

  get f() {
    return this.transactionInfoForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.transactionInfoForm.invalid) {
      return;
    }
    // const formData = JSON.stringify(this.transactionInfoForm.value);
    // this.userService.setSearchFormData(this.transactionInfoForm.value);
    this.router.navigate(["/address-search"], {
      relativeTo: this.route
    });
  }

  onReset() {
    this.submitted = false;
    this.transactionInfoForm.reset();
  }
}
