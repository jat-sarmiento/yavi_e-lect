import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarCandidatoComponent } from './vistar-candidato.component';

describe('VistarCandidatoComponent', () => {
  let component: VistarCandidatoComponent;
  let fixture: ComponentFixture<VistarCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
