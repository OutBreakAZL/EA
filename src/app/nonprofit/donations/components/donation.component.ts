import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CampaignService} from '../../../shared/services/campaign.service';
import { DonorService} from '../../../shared/services/donor.service';
import { DonationService} from '../../../shared/services/donation.service';
import { Campaign} from '../../../shared/models/campaign.model';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    TranslateModule
  ],
  templateUrl: './donation.component.html'
})
export class DonationFormComponent {
  form: FormGroup;
  campaigns: Campaign[] = [];
  message = '';

  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignService,
    private donorService: DonorService,
    private donationService: DonationService
  ) {
    this.form = this.fb.group({
      donorId: ['', Validators.required],
      campaignId: ['', Validators.required],
      itemType: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });

    this.campaignService.getAllCampaigns().subscribe(data => this.campaigns = data);
  }

  onSubmit() {
    const donorId = this.form.value.donorId;
    const campaignId = this.form.value.campaignId;
    const itemType = this.form.value.itemType;

    this.donorService.existsDonor(donorId).subscribe(exists => {
      if (!exists) {
        this.message = 'INVALID_DONOR';
        return;
      }

      const campaign = this.campaigns.find(c => c.id === +campaignId);
      if (campaign && !campaign.targetItems.includes(itemType)) {
        this.message = 'INVALID_ITEM';
        return;
      }

      this.donationService.registerDonation(this.form.value).subscribe(() => {
        this.message = 'THANK_YOU';
        this.form.reset();
      });
    });
  }
}
