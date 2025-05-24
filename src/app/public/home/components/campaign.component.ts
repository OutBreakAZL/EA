import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Campaign} from '../../../shared/models/campaign.model';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  providers: [DatePipe],
  templateUrl: './campaign.component.html'
})
export class CampaignComponent {
  @Input() campaign!: Campaign;

  constructor(private datePipe: DatePipe) {}

  get formattedStart(): string {
    return this.datePipe.transform(this.campaign.startDate, 'MMM d, yyyy') ?? '';
  }

  get formattedEnd(): string {
    return this.datePipe.transform(this.campaign.endDate, 'MMM d, yyyy') ?? '';
  }

  get collected(): number {
    return Math.floor(Math.random() * 2000);
  }

  get goal(): number {
    return 2000;
  }
}
