import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquacaoSegundoGrauComponent } from './equacao-segundo-grau.component';

describe('EquacaoSegundoGrauComponent', () => {
  let component: EquacaoSegundoGrauComponent;
  let fixture: ComponentFixture<EquacaoSegundoGrauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquacaoSegundoGrauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquacaoSegundoGrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
