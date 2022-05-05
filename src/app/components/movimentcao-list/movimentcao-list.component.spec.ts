import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentcaoListComponent } from './movimentcao-list.component';

describe('MovimentcaoListComponent', () => {
  let component: MovimentcaoListComponent;
  let fixture: ComponentFixture<MovimentcaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentcaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentcaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
