import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../item-service/item.service";
import {ActivatedRoute} from "@angular/router";
import {Item} from "../model/item";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  item?: Item;

  constructor(private formBuilder: FormBuilder,
              private itemService: ItemService,
              private route: ActivatedRoute,
              private location: Location
  ) {}

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(id).subscribe(item => this.item = item);
  }

  updateItem() {
    this.itemService.updateItem(this.item).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
