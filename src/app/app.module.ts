import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CategoryComponent} from './components/category/category.component';
import {ApiService} from "./services/api.service";
import {ScrollToModule} from "ng2-scroll-to-el";
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material';
import {ActivatedRoute} from "@angular/router";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'category/:categoryName', component: CategoryComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: HomeComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ScrollToModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule

  ],
  providers: [HttpClientModule, ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
