import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVotanteComponent } from './crear-votante.component';

describe('CrearVotanteComponent', () => {
  let component: CrearVotanteComponent;
  let fixture: ComponentFixture<CrearVotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
