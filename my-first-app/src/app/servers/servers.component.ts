import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]', // if you want to select by attribute do this <div app-servers></div>
  selector: '.app-servers', // select by class
  template: `
    <app-server></app-server>
    <app-server></app-server>`, // probably not preferred, just use templateUrl
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
