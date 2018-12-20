import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// routes
import { ROUTES } from './app.routing';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
