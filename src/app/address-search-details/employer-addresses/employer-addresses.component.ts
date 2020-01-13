import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Shared/api/user.service";

@Component({
  selector: "app-employer-addresses",
  templateUrl: "./employer-addresses.component.html",
  styleUrls: ["./employer-addresses.component.css"]
})
export class EmployerAddressesComponent implements OnInit {
  employerAddresses: any;
  constructor(readonly userService: UserService) {}
  ngOnInit() {
    this.employerAddresses = this.userService.getData("employer");
  }
}
