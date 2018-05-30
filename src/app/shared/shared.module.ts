// ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// modules
import { SharedPipesModule } from '@shared/pipes/shared-pipes.module';
import { SharedComponentsModule } from '@shared/components/shared-components.module';

@NgModule({
  imports: [SharedPipesModule, SharedComponentsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedComponentsModule,
    SharedPipesModule,
  ],
  declarations: [],
})
export class SharedModule {}
