import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Headercomponente } from './headercomponente';

describe('Headercomponente', () => {
  let component: Headercomponente;
  let fixture: ComponentFixture<Headercomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headercomponente],
    }).compileComponents();

    fixture = TestBed.createComponent(Headercomponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
