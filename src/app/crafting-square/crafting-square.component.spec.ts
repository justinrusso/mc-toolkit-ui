import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingSquareComponent } from './crafting-square.component';

describe('CraftingSquareComponent', () => {
  let component: CraftingSquareComponent;
  let fixture: ComponentFixture<CraftingSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftingSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
