import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFeatureStoreModule
  ]
})
export class RootStoreModule { }
