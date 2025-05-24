export interface Donation {
  id?: number;
  donorId: number;
  campaignId: number;
  itemType: string;
  quantity: number;
  condition: string;
}
