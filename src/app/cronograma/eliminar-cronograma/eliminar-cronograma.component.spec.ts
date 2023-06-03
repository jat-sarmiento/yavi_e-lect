import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCronogramaComponent } from './eliminar-cronograma.component';

describe('EliminarCronogramaComponent', () => {
  let component: EliminarCronogramaComponent;
  let fixture: ComponentFixture<EliminarCronogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCronogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
