import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ChatforregistrationService } from '../../service/chatforregistration.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatregitration',
  standalone: false,
  templateUrl: './chatregitration.component.html',
  styleUrl: './chatregitration.component.css'
})
export class ChatregitrationComponent implements AfterViewChecked {

 @ViewChild('chatContainer') private chatContainer!: ElementRef;

  inputText: string = "";
  messages: any[] = [];
  isTyping = false;
  userId: string = "";

  constructor(private chatService: ChatforregistrationService) {
    this.userId = uuidv4(); // unique session for this user
    this.startConversation(); // start with first question
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  // Start the conversation by sending empty text
  startConversation() {
    this.isTyping = true;
    this.chatService.sendMessage(this.userId, "").subscribe(res => {
      this.isTyping = false;
      this.messages.push({ sender: 'bot', text: res.message });
    });
  }

  sendMessage() {
    const text = this.inputText.trim();
    if (!text) return;

    // Add user's message
    this.messages.push({ sender: 'user', text });
    this.inputText = "";
    this.scrollToBottom();

    // Show typing indicator
    this.isTyping = true;

    // Call backend
    this.chatService.sendMessage(this.userId, text).subscribe({
      next: (res) => {
        this.isTyping = false;
        this.messages.push({ sender: 'bot', text: res.message });
        this.scrollToBottom();
      },
      error: () => {
        this.isTyping = false;
        this.messages.push({ sender: 'bot', text: "⚠️ Error connecting to server" });
        this.scrollToBottom();
      }
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 50);
  }

}
