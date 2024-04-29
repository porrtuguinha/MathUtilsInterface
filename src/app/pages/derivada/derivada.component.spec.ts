import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivadaComponent } from './derivada.component';

describe('DerivadaComponent', () => {
  let component: DerivadaComponent;
  let fixture: ComponentFixture<DerivadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerivadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DerivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
