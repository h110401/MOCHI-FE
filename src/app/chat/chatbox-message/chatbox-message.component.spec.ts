import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxMessageComponent } from './chatbox-message.component';

describe('ChatboxMessageComponent', () => {
  let component: ChatBoxMessageComponent;
  let fixture: ComponentFixture<ChatBoxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoxMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBoxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
