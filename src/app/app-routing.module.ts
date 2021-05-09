import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemComponent} from "./item/item.component";
import {ItemUpdateComponent} from "./item-update/item-update.component";
import {ItemCreateComponent} from "./item-create/item-create.component";

const routes: Routes = [
  {path: '', component: ItemComponent},
  {path: 'update/:id', component: ItemUpdateComponent},
  {path: 'create', component: ItemCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
