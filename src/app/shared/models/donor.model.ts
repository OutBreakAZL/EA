export interface Donor {
  id: number;
  firstName: string;
  lastName: string;
  contact: {
    email: string;
    phoneNumber: string;
  };
  totalDonations: number;
}
