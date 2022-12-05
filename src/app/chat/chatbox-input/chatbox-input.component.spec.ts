import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoxInputComponent } from './chatbox-input.component';

describe('ChatboxInputComponent', () => {
  let component: ChatBoxInputComponent;
  let fixture: ComponentFixture<ChatBoxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoxInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBoxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
