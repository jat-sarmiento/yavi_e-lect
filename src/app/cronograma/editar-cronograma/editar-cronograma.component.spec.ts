import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCronogramaComponent } from './editar-cronograma.component';

describe('EditarCronogramaComponent', () => {
  let component: EditarCronogramaComponent;
  let fixture: ComponentFixture<EditarCronogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCronogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
