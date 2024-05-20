import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoHorizontalComponent } from './lancamento-horizontal.component';

describe('LancamentoHorizontalComponent', () => {
  let component: LancamentoHorizontalComponent;
  let fixture: ComponentFixture<LancamentoHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LancamentoHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
