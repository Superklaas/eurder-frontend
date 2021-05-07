import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item-service/item.service";
import {Item} from "../model/item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems(): void {
    this.itemService.getAllItems().subscribe(items => this.items = items);
  }

  deleteItem(item: Item): void {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item).subscribe();
  }
}
