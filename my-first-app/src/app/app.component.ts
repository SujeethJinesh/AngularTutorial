import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   // how the component is called inside of index.html
  templateUrl: './app.component.html',  // component template being used
  // styleUrls: ['./app.component.css']  // css, probs preferred method
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
}
