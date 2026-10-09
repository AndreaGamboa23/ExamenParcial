import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Maincomponente } from './maincomponente';

describe('Maincomponente', () => {
  let component: Maincomponente;
  let fixture: ComponentFixture<Maincomponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maincomponente],
    }).compileComponents();

    fixture = TestBed.createComponent(Maincomponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
