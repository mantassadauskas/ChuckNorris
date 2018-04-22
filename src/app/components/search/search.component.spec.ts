import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from "../../services/api.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {SearchComponent} from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSnackBarModule
      ],
      providers: [
        ApiService, MatSnackBar, Overlay
      ],
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should be created function searchFact ', function () {
    expect(component.searchFact).toBeTruthy();
  });

  it('should be created function nextPage ', function () {
    expect(component.nextPage).toBeTruthy();
  });

  it('should be created function previousPage ', function () {
    expect(component.previousPage).toBeTruthy();
  });

  it('should be created function snackBarText ', function () {
    expect(component.snackBarText).toBeTruthy();
  });
});
