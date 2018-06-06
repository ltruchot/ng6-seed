// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppStoreModule } from '@store/app-store.module';
// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ng
    BrowserModule,
    // custom
    AppRoutingModule,
    AppStoreModule.forRoot(),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
