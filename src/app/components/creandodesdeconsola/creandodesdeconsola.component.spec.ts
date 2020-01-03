import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreandodesdeconsolaComponent } from './creandodesdeconsola.component';

describe('CreandodesdeconsolaComponent', () => {
  let component: CreandodesdeconsolaComponent;
  let fixture: ComponentFixture<CreandodesdeconsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreandodesdeconsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreandodesdeconsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
