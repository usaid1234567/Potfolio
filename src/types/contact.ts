export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  subject: string;
  projectType: string;
  budget?: string;
  message: string;
  consent: boolean;
}
