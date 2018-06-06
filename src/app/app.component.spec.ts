// ng
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
// modules
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { AppStoreModule } from '@store/app-store.module';
// components
import { AppComponent } from './app.component';
// services
import { ApiService } from '@core/services/api.service';
import { AppRoutingModule } from '@app/app-routing.module';

describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule,
          AppStoreModule.forRoot(),
          AppRoutingModule,
          CoreModule,
          SharedModule
        ],
        declarations: [AppComponent],
        providers: [ApiService, { provide: APP_BASE_HREF, useValue: '/' }]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
