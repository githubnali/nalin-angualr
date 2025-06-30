import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsearchSuggestionsComponent } from './gsearch-suggestions.component';

describe('GsearchSuggestionsComponent', () => {
  let component: GsearchSuggestionsComponent;
  let fixture: ComponentFixture<GsearchSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GsearchSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GsearchSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
