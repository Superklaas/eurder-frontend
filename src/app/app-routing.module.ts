import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from "./item/item.component";
import {ItemUpdateComponent} from "./item-update/item-update.component";

const routes: Routes = [
  {path: '', component: ItemComponent},
  {path: 'update/:id', component: ItemUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
