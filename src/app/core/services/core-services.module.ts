// ng
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// services
import { ApiService } from './api.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [ApiService]
})
export class CoreServicesModule {}
