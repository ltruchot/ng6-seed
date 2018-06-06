import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { PipesModule } from './pipes/pipes.module';
// import { DirectivesModule } from './directives/directives.module';
import { ComponentsModule } from './components/components.module';

// Pipes

@NgModule({
  imports: [/* PipesModule, DirectivesModule, */ ComponentsModule],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule /*, PipesModule, DirectivesModule*/
  ],
  declarations: []
})
export class SharedModule {}
