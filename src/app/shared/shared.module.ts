import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, AlertComponent, DropdownDirective],
  imports: [CommonModule],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective,
  ],
})
export class SharedModule {}
