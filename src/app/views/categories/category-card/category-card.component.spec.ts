import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CategoriesModule } from '../categories.module';

fdescribe('CategoryCardComponent', () => {
  let component: TestCategoryCard;
  let fixture: ComponentFixture<TestCategoryCard>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [CategoriesModule],
      declarations: [TestCategoryCard],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCategoryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display categoryTitle as title', () => {
    const actualTitle = fixture.debugElement.query(By.css('.category-title'))
      .nativeElement.innerText;
    expect(actualTitle).toBe('title');
  });

  it('should display recipesCount of this category', () => {
    const actualRecipesCount = fixture.debugElement.query(
      By.css('.recipes-count')
    ).nativeElement.innerText;
    expect(actualRecipesCount).toBe('1');
  });

  it('should display image with imageUrl of this categroy', () => {
    const actualImageUrl = fixture.debugElement.query(By.css('.category-image'))
      .nativeElement.src;
    expect(actualImageUrl.includes('path/to/image')).toBeTruthy();
  });
});

@Component({
  selector: 'rp-test-cateogry-card',
  template: `
    <rp-category-card
      [title]="title"
      [recipesCount]="categoriesCount"
      [imageUrl]="imageUrl"
    ></rp-category-card>
  `,
})
class TestCategoryCard {
  title = 'title';
  categoriesCount = 1;
  imageUrl = 'path/to/image';
}
