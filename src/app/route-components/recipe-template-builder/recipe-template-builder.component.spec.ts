import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTemplateBuilderComponent } from './recipe-template-builder.component';
import {CraftingSquareComponent} from '../../crafting-square/crafting-square.component';
import {AngularDraggableModule} from 'angular2-draggable';

describe('RecipeTemplateBuilderComponent', () => {
  let component: RecipeTemplateBuilderComponent;
  let fixture: ComponentFixture<RecipeTemplateBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeTemplateBuilderComponent,
        CraftingSquareComponent
      ],
      imports: [
        AngularDraggableModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTemplateBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
