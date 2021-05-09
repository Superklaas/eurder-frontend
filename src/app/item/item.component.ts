import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemService} from "../item-service/item.service";
import {Item} from "../model/item";
import {ItemUpdateComponent} from "../item-update/item-update.component";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  private getAllItems(): void {
    this.itemService.getAllItems().subscribe(items => this.items = items);
  }

  deleteItem(item: Item): void {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item).subscribe();
  }

}
