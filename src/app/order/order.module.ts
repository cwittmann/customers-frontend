import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  imports: [CommonModule, SharedModule, CommonComponentsModule],
})
export class OrderModule {}
