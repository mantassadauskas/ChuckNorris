import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {
  host: string;

  constructor(public http: HttpClient) {
    this.host = 'https://api.chucknorris.io/jokes'
  }

  randomFact() {
    return this.http.get(`${this.host}/random`)
  }

  categories() {
    return this.http.get(`${this.host}/categories`)
  }

  categoryFacts(category) {
    return this.http.get(`${this.host}/random?category=${category}`)
  }

  searchFact(searchValue) {
    return this.http.get(`${this.host}/search?query=${searchValue}`)

  }

}
