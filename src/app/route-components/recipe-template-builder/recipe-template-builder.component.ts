import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-template-builder',
  templateUrl: './recipe-template-builder.component.html',
  styleUrls: ['./recipe-template-builder.component.scss']
})
export class RecipeTemplateBuilderComponent implements OnInit {
  public menuOpen = false;
  public builderButtons = [
    {
      name: 'Crafting square'
    },
    {
      name: 'Test 2'
    },
    {
      name: 'Test 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  get boundingBox() {
    return document.body;
  }
}
