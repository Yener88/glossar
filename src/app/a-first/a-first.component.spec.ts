import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFirstComponent } from './a-first.component';

describe('AFirstComponent', () => {
  let component: AFirstComponent;
  let fixture: ComponentFixture<AFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
