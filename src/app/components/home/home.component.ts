import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ScrollToService} from 'ng2-scroll-to-el';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  randomFact: string;
  categoryList: string[];
  i: number = 0;
  randomFactTimer: any;

  constructor(public api: ApiService, private scrollService: ScrollToService, private snackbar: MatSnackBar) {
  }


  ngOnInit() {
    this.getFact();
    this.randomFactTimer = setInterval(() => {
      this.getFact()
    }, 15000);
    this.getCategories();

  }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }

  getFact() {
    this.api.randomFact().subscribe({
      next: (response: any) => {
        this.randomFact = '';
        let randomFact2 = response.value;
        for (let i = 0; i < randomFact2.length; i++) {
          setTimeout(() => {
            this.randomFact += randomFact2.substr(i, 1);
            randomFact2.slice(0, 1);
          }, 30 * i);
        }

      }, error: (err: any) => {
        this.snackBarText(err.message);
      }
    })
  }

  getCategories() {
    this.api.categories().subscribe({
      next: (response: any) => {
        this.categoryList = response;
      }, error: (err: any) => {
        this.snackBarText(err.message);
      }
    });
  }
  snackBarText(message){
    this.snackbar.open(message, 'Got it');
  }

  ngOnDestroy() {
    clearInterval(this.randomFactTimer);
  }
}

