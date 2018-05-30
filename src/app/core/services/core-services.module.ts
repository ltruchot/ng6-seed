// ng
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// services
import { ApiService } from './api.service';
import { MultilangService } from '@core/services/multilang.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [ApiService, MultilangService],
})
export class CoreServicesModule {}
