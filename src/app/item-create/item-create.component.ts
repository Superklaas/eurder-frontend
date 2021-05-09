import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../item-service/item.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  createItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  constructor(private itemService: ItemService,
              private formBuilder: FormBuilder,
              private location: Location) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.createItem(this.createItemForm.value).subscribe(createdItem => {
      console.log(createdItem);
      this.createItemForm.reset();
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }

}
