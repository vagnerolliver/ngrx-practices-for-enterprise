import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureStoreEntityModule } from './feature-store--entity/feature-store.module';
import { FeatureStoreStandardModule } from './feature-store--standard/feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureStoreEntityModule,
    FeatureStoreStandardModule
  ]
})
export class RootStoreModule { }
