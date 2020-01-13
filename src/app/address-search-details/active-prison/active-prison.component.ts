import { Component,  OnInit } from "@angular/core";
import { UserService } from 'src/app/Shared/api/user.service';

@Component({
  selector: "app-active-prison",
  templateUrl: "./active-prison.component.html",
  styleUrls: ["./active-prison.component.css"]
})
export class ActivePrisonComponent implements OnInit {
  prisoners: any;
  constructor(readonly userService : UserService) {}
  ngOnInit() {
    this.prisoners = this.userService.getData( "prison");
  }
}
