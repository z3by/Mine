import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsNavComponent } from './urls-nav.component';

describe('UrlsNavComponent', () => {
  let component: UrlsNavComponent;
  let fixture: ComponentFixture<UrlsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
