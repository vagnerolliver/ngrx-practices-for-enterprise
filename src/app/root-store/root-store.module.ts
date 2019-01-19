import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeatureStoreEntityModule } from './feature-store--entity/feature-store.module';
import { FeatureStoreStandardModule } from './feature-store--standard/feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureStoreEntityModule,
    FeatureStoreStandardModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class RootStoreModule { }
