import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-issues",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./issues.component.html",
  styleUrl: "./issues.component.css",
})
export class IssueComponent {
  title = "issues";
}
