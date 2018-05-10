import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // so we can get url args

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // done through dependency injection
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(res => console.log(res.id))
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']); // corresponds to path in app-routing module
  }

}
