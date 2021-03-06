import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // importing component


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // allowing component to be used
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  // lists all components that should be known to angular at run time
})
export class AppModule {
}
