import { Component, Input } from '@angular/core';
import { ModeoftravelagentService } from '../../../service/modeoftravelagent.service';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface Reason {
  title: string;
  items: string[];
}

interface ParsedRecommendation {
  recommendation: string;
  reasoning: string|any[];
  verdict: string;
  tip: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: false,
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent{
  
inputText: string = '';
  messages: Message[] = [];
  isTyping: boolean = false;
  parsedRecommendation: any = {
    recommendation: '',
    reasoning: [{ title: '', items: [] }],
    verdict: '',
    tip: ''
  };

  constructor(private travelService: ModeoftravelagentService) {}

  sendMessage() {
    if (!this.inputText.trim()) return;

    // Add user message
    this.messages.push({ sender: 'user', text: this.inputText });
    this.isTyping = true;

    // Call the service
    this.travelService.sendMessage('user123', this.inputText).subscribe(
      (response) => {
        // Add bot message
        this.messages.push({ sender: 'bot', text: response.text });
        this.parseRecommendation(response.text);
        this.isTyping = false;
        this.inputText = '';
      },
      (error) => {
        console.error('Error:', error);
        this.isTyping = false;
      }
    );
  }

  parseRecommendation(text: string): void {
    // Example parsing logic (adjust based on your actual API response structure)
    // This is a placeholder; replace with your actual parsing logic
    this.parsedRecommendation = {
      recommendation: text.match(/Recommendation: (.+)/)?.[1] || 'Not available',
      reasoning: text.match(/Reasoning: (.+)/s)?.[1].split('\n').filter(Boolean) || [],
      verdict: text.match(/Verdict: (.+)/s)?.[1] || 'Not available',
      tip: text.match(/Tip: (.+)/s)?.[1] || 'Not available'
    };
  }
}
