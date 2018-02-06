import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTemplateBuilderComponent } from './recipe-template-builder.component';

describe('RecipeTemplateBuilderComponent', () => {
  let component: RecipeTemplateBuilderComponent;
  let fixture: ComponentFixture<RecipeTemplateBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTemplateBuilderComponent ]
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
