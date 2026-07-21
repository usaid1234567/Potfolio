export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
  skills?: string[];
  credentialId?: string;
  verifyUrl?: string;
  certificateUrl?: string;
  expiryDate?: string;
  featured?: boolean;
}
