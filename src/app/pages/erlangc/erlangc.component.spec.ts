import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErlangcComponent } from './erlangc.component';

describe('ErlangcComponent', () => {
  let component: ErlangcComponent;
  let fixture: ComponentFixture<ErlangcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErlangcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErlangcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
