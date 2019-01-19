import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MyFeatureStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('myFeature', featureReducer),
    EffectsModule.forFeature([MyFeatureStoreEffects])
  ]
})
export class FeatureStoreStandardModule {
}
