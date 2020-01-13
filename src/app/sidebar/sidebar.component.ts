import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  selectedTabOption: string;

  constructor() {}

  ngOnInit() {}

  selectedTab(selecetedTabName: string): void {
    this.selectedTabOption = selecetedTabName;
  }
}
