import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeComponent} from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from "../../services/api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ScrollToModule, ScrollToService} from "ng2-scroll-to-el";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,
        ScrollToModule.forRoot(),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSnackBarModule
      ],
      providers: [
        ApiService, ScrollToService, MatSnackBar, Overlay
      ],
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should be created function getFact ', function () {
    expect(component.getFact).toBeTruthy();
  });
  it('should be created function getCategories ', function () {
    expect(component.getCategories).toBeTruthy();
  });
  it('should be created function snackBarText ', function () {
    expect(component.snackBarText).toBeTruthy();
  });
  it('should be created function scrollToTop ', function () {
    expect(component.scrollToTop).toBeTruthy();
  });

});
