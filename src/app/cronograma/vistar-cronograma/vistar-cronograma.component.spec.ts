import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarCronogramaComponent } from './vistar-cronograma.component';

describe('VistarCronogramaComponent', () => {
  let component: VistarCronogramaComponent;
  let fixture: ComponentFixture<VistarCronogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarCronogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
