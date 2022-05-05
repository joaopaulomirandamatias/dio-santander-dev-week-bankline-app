import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentcaoNewComponent } from './movimentcao-new.component';

describe('MovimentcaoNewComponent', () => {
  let component: MovimentcaoNewComponent;
  let fixture: ComponentFixture<MovimentcaoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentcaoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentcaoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
