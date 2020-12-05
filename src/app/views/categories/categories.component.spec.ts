import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { CategoriesService, Category } from 'src/app/categories.service';

import { CategoriesComponent } from './categories.component';

class MockCategoriesService {
  public categories$ = new BehaviorSubject<Category[]>([
    {
      categoryName: 'śniadania',
      photoUrl: '../assets/photos/śniadania.jpg',
      recipesCount: 0,
    } as Category,
  ]);
}

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      providers: [
        {
          provide: CategoriesService,
          useClass: MockCategoriesService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
