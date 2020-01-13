import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Shared/api/user.service";

@Component({
  selector: "app-addresses",
  templateUrl: "./addresses.component.html",
  styleUrls: ["./addresses.component.css"]
})
export class AddressesComponent implements OnInit {
  addresses: any;
  routerChanged: boolean;
  constructor(readonly userService: UserService) {}
  ngOnInit() {
    this.addresses = this.userService.getData("address");
    // this.routerChanged = true;
    // const personData = this.userService.getData("personData");
    // this.userService.getDetails(personData).subscribe(response => {
    //   this.addresses = response["address"];
    //   const prison = response["prison"];
    //   const probation = response["probation"];
    //   const employerAddresses = response["employment"];

    //   this.userService.setData(this.addresses, "address");
    //   this.userService.setData(prison, "prison");
    //   this.userService.setData(probation, "probation");
    //   this.userService.setData(employerAddresses, "employment");

    //   this.routerChanged = false;
    // });
  }
}
