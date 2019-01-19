import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureStoreModule } from './feature-store--entity/feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureStoreModule
  ]
})
export class RootStoreModule { }
