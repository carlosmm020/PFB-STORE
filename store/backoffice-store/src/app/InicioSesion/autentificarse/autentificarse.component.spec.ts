import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificarseComponent } from './autentificarse.component';

describe('AutentificarseComponent', () => {
  let component: AutentificarseComponent;
  let fixture: ComponentFixture<AutentificarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificarseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutentificarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
