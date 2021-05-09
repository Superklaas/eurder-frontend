import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ItemService} from "../item-service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  updateItemForm = this.formBuilder.group({
    id: Number(this.route.snapshot.paramMap.get('id')),
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  constructor(private formBuilder: FormBuilder,
              private itemService: ItemService,
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.itemService.updateItem(this.updateItemForm.value).subscribe(data => {
      console.log('message::::', data);
      this.updateItemForm.reset();
    });
  }
}
