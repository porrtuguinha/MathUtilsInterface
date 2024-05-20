import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaDeAceleracaoComponent } from './forca-de-aceleracao.component';

describe('ForcaDeAceleracaoComponent', () => {
  let component: ForcaDeAceleracaoComponent;
  let fixture: ComponentFixture<ForcaDeAceleracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcaDeAceleracaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForcaDeAceleracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
