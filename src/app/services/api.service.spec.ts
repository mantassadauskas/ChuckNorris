import {TestBed, inject} from '@angular/core/testing';
import {ApiService} from './api.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('Api', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
      .compileComponents();
  });

  it('should be created API service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));


  it('should be created randomFact function and should retrieve random fact', inject([ApiService], (service: ApiService) => {
    expect(service.randomFact).toBeTruthy();
    const mockRandomFact = [
      {
        "category": ["science"],
        "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
        "id": "h2le0vpkstise9oetsodmw",
        "url": "https:\/\/api.chucknorris.io\/jokes\/h2le0vpkstise9oetsodmw",
        "value": "Newton\u0027s Third Law is wrong: Although it states that for each action, there is an equal and opposite reaction, there is no force equal in reaction to a Chuck Norris roundhouse kick."
      }
    ];
    service.randomFact().subscribe(response => {
      expect(response).toBe(mockRandomFact)
    })
  }));
  it('should be created categories function and should retrieve categories', inject([ApiService], (service: ApiService) => {
    expect(service.categories).toBeTruthy();
    const mockCategoryList = ["explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion", "animal", "history", "music", "travel", "career", "money", "fashion"]

    service.categories().subscribe(response => {
      expect(response).toBe(mockCategoryList)
    })
  }));
  it('should be created categoryFacts function and should retrieve category fact', inject([ApiService], (service: ApiService) => {
    expect(service.categoryFacts).toBeTruthy();
    const category: string = 'category';
    const mockCategoryFact = [
      {
        "category": ["dev"],
        "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
        "id": "gyha_1u2t66xgarrowtlva",
        "url": "https:\/\/api.chucknorris.io\/jokes\/gyha_1u2t66xgarrowtlva",
        "value": "Chuck Norris can overflow your stack just by looking at it."
      }
    ];
    service.categoryFacts(category).subscribe(fact => {
      expect(fact).toBe(mockCategoryFact)
    })
  }));
  it('should be created searchFact function and should retrieve search results', inject([ApiService], (service: ApiService) => {
    expect(service.searchFact).toBeTruthy();
    const mockSearchValue: string = 'asd';
    const mockSearch = [
      {
        "total": 1,
        "result": [{
          "category": null,
          "icon_url": "https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
          "id": "29mUQUPYRG2AjohjN33ysw",
          "url": "https:\/\/api.chucknorris.io\/jokes\/29mUQUPYRG2AjohjN33ysw",
          "value": "C\u0027mon Chuck Norris isn\u0027t that great... if he was truly that amazing he would come over and slam my head into the key EAOJ;BGWoenbsKFDPONBqegkbs dlvjbasvaxfl;bxs spkadgo;kjsfbvklndsfalkmbnasdflkgbsadg;lkbsafd;lkgbsad;glknb ;sldg"
        }]
      }
    ];
    service.categoryFacts(mockSearchValue).subscribe(fact => {
      expect(fact).toBe(mockSearch)
    })
  }));

});
