import { MyFeatureStoreStateEntity  } from './feature-store--entity';
import { MyFeatureStoreStateStandard } from './feature-store--standard';

export interface RootState {
  myFeature: MyFeatureStoreStateEntity.State;
  myOtherFeature: MyFeatureStoreStateStandard.State;
}
