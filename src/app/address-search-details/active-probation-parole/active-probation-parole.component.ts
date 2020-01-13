import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Shared/api/user.service";

@Component({
  selector: "app-active-probation-parole",
  templateUrl: "./active-probation-parole.component.html",
  styleUrls: ["./active-probation-parole.component.css"]
})
export class ActiveProbationParoleComponent implements OnInit {
  probations: any;
  constructor(readonly userService: UserService) {}
  ngOnInit() {
    this.probations = this.userService.getData("probation");
  }
}
