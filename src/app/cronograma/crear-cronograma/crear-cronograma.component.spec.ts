import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCronogramaComponent } from './crear-cronograma.component';

describe('CrearCronogramaComponent', () => {
  let component: CrearCronogramaComponent;
  let fixture: ComponentFixture<CrearCronogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCronogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
