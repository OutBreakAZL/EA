import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from '../components/campaign.component';
import { CampaignService } from '../../../shared/services/campaign.service';
import { MatGridListModule } from '@angular/material/grid-list'; // ✅ NECESARIO
import { TranslateModule } from '@ngx-translate/core'; // ✅ Para los pipes de traducción

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    TranslateModule,
    CampaignComponent
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})

export class HomePage {
  constructor(public campaignService: CampaignService) {}
}

