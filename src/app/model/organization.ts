export class Organization {
  id: number;
  name: string;
  logo?: string;
  coverPhoto?: string;
  aboutTitle?: string; /* maybe use inheritance in the future from a message*/
  aboutContent?: string;
  contactInfoEmail: string;
  contactInfoPhone: string;
}

