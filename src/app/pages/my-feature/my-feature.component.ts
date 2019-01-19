import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyModel } from '../../models';
import {
  RootStoreState,
  MyFeatureStoreEntityActions,
  MyFeatureStoreEntitySelectors
} from '../../root-store';

@Component({
  selector: 'app-my-feature',
  styleUrls: ['my-feature.component.css'],
  templateUrl: './my-feature.component.html'
})
export class MyFeatureComponent implements OnInit {
  myFeatureItems$: Observable<MyModel[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.myFeatureItems$ = this.store$.select(
      MyFeatureStoreEntitySelectors.selectAllMyFeatureItems
    );

    this.error$ = this.store$.select(
      MyFeatureStoreEntitySelectors.selectUnProcessedDocumentError
    );

    this.isLoading$ = this.store$.select(
      MyFeatureStoreEntitySelectors.selectUnProcessedDocumentIsLoading
    );

    this.store$.dispatch(
      new MyFeatureStoreEntityActions.LoadRequestAction()
    );
  }
}
