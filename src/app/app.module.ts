// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
// component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ng
    BrowserModule,
    // custom
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
