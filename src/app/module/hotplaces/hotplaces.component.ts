import { Component, OnInit } from '@angular/core';
import { AiserviceService } from '../../service/aiservice.service';
import { TouristAttractionInterface } from '../../model/touristAttraction.interface';
import { SpinnerService } from '../../service/spinner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotplaces',
  standalone: false,
  templateUrl: './hotplaces.component.html',
  styleUrl: './hotplaces.component.css'
})
export class HotplacesComponent implements OnInit{
  
  response: string = '';
  cleanResponse!: string;
  prompt!: string;
  seeAll!: boolean;
  isLoading$!: Observable<boolean>;

  constructor(private aiService: AiserviceService, private spinnerService: SpinnerService) { }
  
  ngOnInit(): void {
    this.isLoading$ = this.spinnerService.loading$;
  }

  cleanText(text: string): string {
    // Basic cleaning (just # and *)
    return text.replace(/[#*]/g, '');
    
    // OR for more aggressive cleaning:
    // return text.replace(/[^\w\s.,:;?!'-]/g, '');
  }

  async generate() {
    this.spinnerService.showLoading();
    try {
      this.response = await this.aiService
        .generateText(`Generate description about famous places` + this.prompt + ` in Sri Lanka`);
      this.cleanResponse = this.cleanText(this.response);
      this.spinnerService.hideLoading()
    } catch (error: any) {
      this.response = 'Error: ' + error.message;
    }
    this.spinnerService.hideLoading();
  }

  clean(): void {
    this.prompt = "";
    this.cleanResponse = "";
   }
}
