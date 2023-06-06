import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarVotanteComponent } from './vistar-votante.component';

describe('VistarVotanteComponent', () => {
  let component: VistarVotanteComponent;
  let fixture: ComponentFixture<VistarVotanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarVotanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarVotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
