import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { ServicesModule } from './services.module';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
    });
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
