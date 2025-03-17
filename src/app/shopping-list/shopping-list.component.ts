import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ingredientSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredintsUpdated: Ingredient[]) => {
        this.ingredients = ingredintsUpdated;
      }
    );
  }

  onEditIrem(index: number) {
    this.shoppingListService.ingredientEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
