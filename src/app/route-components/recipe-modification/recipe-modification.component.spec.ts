import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModificationComponent } from './recipe-modification.component';

describe('RecipeModificationComponent', () => {
  let component: RecipeModificationComponent;
  let fixture: ComponentFixture<RecipeModificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeModificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
