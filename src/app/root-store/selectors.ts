import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  MyFeatureStoreEntitySelectors
} from './feature-store--entity';

import {
  MyFeatureStoreStandardSelectors
} from './feature-store--standard';

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyFeatureStoreEntitySelectors.selectMyFeatureError,
  MyFeatureStoreStandardSelectors.selectMyFeatureError,
  (myFeatureError: string, myOtherFeatureError: string) => {
    return myFeatureError || myOtherFeatureError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(
  MyFeatureStoreEntitySelectors.selectMyFeatureIsLoading,
  MyFeatureStoreStandardSelectors.selectMyFeatureIsLoading,
  (myFeature: boolean, myOtherFeature: boolean) => {
    return myFeature || myOtherFeature;
  }
);
