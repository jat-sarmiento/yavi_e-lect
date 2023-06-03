import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarAdministradorComponent } from './vistar-administrador.component';

describe('VistarAdministradorComponent', () => {
  let component: VistarAdministradorComponent;
  let fixture: ComponentFixture<VistarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
