import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

interface MistralMessage {
  role: string;
  content: string;
}

interface MistralRequest {
  model: string;
  messages: MistralMessage[];
  temperature?: number;
  max_tokens?: number;
}

interface MistralResponse {
  choices: {
    message: MistralMessage;
  }[];
}


@Injectable({
  providedIn: 'root'
})
export class AiserviceService {
  
  response: string = '';
  private apiUrl = 'https://api.mistral.ai/v1/chat/completions'; 
  
  constructor(private http: HttpClient) { 
    
  }
  
  async generateText(prompt: string): Promise<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer H1PSVLETk1g6H0SnZKCQcY8exIeoyKuB` // Fixed environment variable name
    });
  
    const body: MistralRequest = {
      model: 'mistral-large-latest',
      messages: [{
        role: 'user',
        content: prompt
      }]
    };
  
    try {
      const response = await this.http.post<MistralResponse>(
        'https://api.mistral.ai/v1/chat/completions', // Explicit URL
        body,
        { headers }
      ).toPromise();
  
      return response?.choices[0]?.message?.content || '';
    } catch (error) {
      const httpError = error as HttpErrorResponse;
      console.error('Mistral API Error:', httpError.error);
      throw new Error(`API request failed: ${httpError.message}`);
    }
  }
    
}
