import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Category} from "../../models/Category";
import {MatSnackBar} from '@angular/material';
import {ScrollToService} from "ng2-scroll-to-el";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList: Category[];
  categoryFacts: string[];
  id: number;
  categoryByURL: string;

  constructor(private route: ActivatedRoute, public Api: ApiService, private scrollService: ScrollToService, private snackbar: MatSnackBar) {
    this.id = 0;
    this.categoryFacts = [];
    this.categoryList = [];
    this.categoryByURL = undefined;

    this.Api.categories().subscribe({
      next: (response: any) => {
        let ctg = response;
        for (let c of ctg) {
          this.categoryList.push(new Category(this.id, c, false));
          this.id++;
        }
        this.route.params.subscribe({
          next: (response: any) => {
            this.categoryFacts = [];
            this.categoryByURL = response['categoryName'];
            for (let active of this.categoryList) {
              if (active.name == this.categoryByURL) {
                active.selected = true;
                this.getFacts();
              }
            }
          }, error: (err: any) => {
            this.snackBarText(err.message);

          }
        });
      }, error: (err: any) => {
        this.snackBarText(err.message);

      }
    });
  }

  ngOnInit() {

  }

  getFacts() {
    this.categoryFacts = [];
    let i = 0;
    do {
      i++;
      for (let active of this.categoryList) {
        if (active.selected === true) {
          this.getCategoryFacts(active.name);
        }
      }
    } while (i < 8);
  }

  selectedToggle(category) {
    this.categoryByURL = undefined;
    for (let catList of this.categoryList) {
      if (category.id === catList.id) {
        if (catList.selected === true) {
          catList.selected = false;
        } else {
          catList.selected = true;
        }
      }
      if (catList.selected === true) {
        this.categoryByURL = 'active';
      }
    }
  }

  getCategoryFacts(category) {
    this.Api.categoryFacts(category).subscribe({
      next: (response: any) => {
        if (this.categoryFacts.length < 3) {
          if (this.categoryFacts[0] !== response.value && this.categoryFacts[1] !== response.value) {
            this.categoryFacts.push(response.value);
          }
        } else {
          return
        }
      }, error: (err: any) => {
        this.snackBarText(err.message);
      }
    })
  }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }

  snackBarText(message) {
    this.snackbar.open(message, 'Got it');
  }
}
