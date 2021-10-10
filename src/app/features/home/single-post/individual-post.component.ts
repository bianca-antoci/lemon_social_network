import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-individual-post-component',
    templateUrl: './individual-post.component.html',
    styleUrls: ['./individual-post.component.css']
  })
  export class IndividualPostComponent {
    @Input()
    model: any;
  }
  