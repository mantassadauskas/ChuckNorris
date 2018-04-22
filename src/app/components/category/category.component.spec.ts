import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CategoryComponent} from './category.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from "../../services/api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ScrollToModule, ScrollToService} from "ng2-scroll-to-el";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('CategoriesComponent', () => {

  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let el: DebugElement;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
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
      declarations: [CategoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('a'));
  });

  it('should create category component', () => {
    expect(component).toBeTruthy();
  });

  it('should create selectedToggle function', function () {
    expect(component.selectedToggle).toBeTruthy();
  });
  it('should create getCategoryFacts function', function () {
    expect(component.getCategoryFacts).toBeTruthy();

  });
  it('should create snackBarText function', function () {
    expect(component.snackBarText).toBeTruthy();

  });

});

