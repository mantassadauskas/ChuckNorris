import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {debounceTime} from "rxjs/operators";
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: FormControl;
  factsFound: string[];
  searchFailed: boolean;
  keywordTooShort: boolean;
  pageNumber: number = 0;
  pagedFacts: string[];
  nextPageButton: boolean;
  previousPageButton: boolean;

  constructor(public api: ApiService, private snackbar: MatSnackBar) {

    this.factsFound = [];
    this.pagedFacts = [];
    this.nextPageButton = true;
    this.previousPageButton = false;
    this.searchFailed = false;
    this.keywordTooShort = false;
    this.searchValue = new FormControl;

    this.searchValue.valueChanges.pipe(debounceTime(400)).subscribe({
      next: (value: any) => {
        this.factsFound = [];
        this.pagedFacts = [];
        this.searchFailed = false;

        if (this.searchValue.value.length >= 3) {
          this.keywordTooShort = false;

          this.searchFact(value);
        } else {
          this.keywordTooShort = true;
        }
      }, error: (err: any) => {
        this.searchFailed = true;

        return Observable.throw(err.statusText);
      }
    })
  }

  ngOnInit() {
  }


  searchFact(searchValue) {
    this.factsFound = [];
    this.api.searchFact(searchValue).subscribe({
      next: (response: any) => {
        this.searchFailed = false;

        let searchResults = response.result;
        for (let results of searchResults) {
          this.factsFound.push(results.value);

        }
        if (this.factsFound.length === 0) {
          this.searchFailed = true;
        }
        if (this.factsFound.length > 10) {
          this.nextPageButton = true;
          for (let i = 0; i < 10; i++) {
            this.pagedFacts.push(this.factsFound[i])
          }
        }
      }, error: (err: any) => {
        this.snackBarText(err.message);
        this.searchFailed = true;

      }
    })
  }

  nextPage() {
    this.pagedFacts = [];
    this.pageNumber++;
    this.previousPageButton = true;

    if (this.factsFound.length > this.pageNumber * 10) {

      for (let i = this.pageNumber * 10; i < (1 + this.pageNumber) * 10; i++) {
        this.pagedFacts.push(this.factsFound[i]);
      }
    }
    if (this.factsFound.length < (1 + this.pageNumber) * 10) {
      this.nextPageButton = false;

    }

  }

  previousPage() {
    this.pagedFacts = [];
    this.pageNumber--;
    this.nextPageButton = true;


    if (this.factsFound.length > this.pageNumber * 10) {

      for (let i = this.pageNumber * 10; i < (1 + this.pageNumber) * 10; i++) {
        this.pagedFacts.push(this.factsFound[i]);
      }
    }
    if (this.pageNumber <= 0) {
      this.previousPageButton = false;

    }

  }

  snackBarText(message) {
    this.snackbar.open(message, 'Got it');
  }
}
