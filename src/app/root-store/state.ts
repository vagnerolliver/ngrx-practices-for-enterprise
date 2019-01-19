import { MyFeatureStoreStateEntity  } from './feature-store--entity';
import { MyFeatureStoreStateStandard } from './feature-store--standard';

export interface State {
  myFeature: MyFeatureStoreStateEntity.State;
  myOtherFeature: MyFeatureStoreStateStandard.State;
}
