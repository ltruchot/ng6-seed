// ng
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// modules
import { AppRoutingModule } from '@app/app-routing.module';
import { CoreModule } from '@app/core/core.module';
import { AppStoreModule } from '@app/store/app-store.module';
// component
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ng
    BrowserModule,
    // custom
    AppStoreModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
