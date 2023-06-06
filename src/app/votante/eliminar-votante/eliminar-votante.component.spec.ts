import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVotanteComponent } from './eliminar-votante.component';

describe('EliminarVotanteComponent', () => {
  let component: EliminarVotanteComponent;
  let fixture: ComponentFixture<EliminarVotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
