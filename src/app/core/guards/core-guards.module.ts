// ng
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// guards
import { AuthGuard } from '@app/core/guards/auth.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [AuthGuard]
})
export class CoreGuardsModule {}
