// ng
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// modules
import { AppStoreModule } from '@store/app-store.module';
// services
import { ApiService } from '@core/services/api.service';
// components
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppStoreModule.forRoot(), HttpClientModule],
        declarations: [HeaderComponent],
        providers: [ApiService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
