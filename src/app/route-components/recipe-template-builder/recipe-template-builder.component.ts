import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

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

  constructor(
    private elementRef: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  get boundingBox() {
    return document.body;
  }

  uploadImage() {
    const reader = new FileReader();
    const file = (<HTMLInputElement>this.elementRef.nativeElement.querySelector('input[type=file]')).files[0];

    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      const imageDataUri = reader.result;
      this.renderer.setStyle(this.elementRef.nativeElement,
        'background', `url(${imageDataUri})`
      );
    }, false);
  }
}
