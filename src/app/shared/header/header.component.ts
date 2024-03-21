import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-nav",
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatMenuModule, MatIcon],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  title = "header-planning";

  ngOnInit() {
    console.log("NGONINIT header component");
  }

  sayHello() {
    alert("HELLO");
  }
}
