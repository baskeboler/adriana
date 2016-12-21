import { Component, OnInit, OnDestroy } from '@angular/core';
import { CityService } from '../../providers/cities.service';
import { FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';
@Component({
  // moduleId: module.id,
  selector: 'city-list',
  templateUrl: 'city-list.component.html'
})
export class CityListComponent implements OnInit, OnDestroy {
  cities: FirebaseListObservable<any>;
  citiesSub: Subscription;
  constructor(private cityService: CityService) {
    // this.cities = cityService.find();

  }

  ngOnInit() {
    let promise = this.cityService.find();
    // promise.then()
    this.citiesSub = promise.subscribe((v) => {
      this.cities = v;
      // this.citiesSub.unsubscribe();
    });
  }

  ngOnDestroy() {
    console.log('unsubscribing from cities list');
    this.citiesSub.unsubscribe();
  }
}
