export type EmergencyResource = {
  title: string;
  phone: string;
  description?: string;
};

export const emergencyResources: EmergencyResource[] = [
  { title: 'SADAG Suicide Crisis Helpline', phone: '0800 567 567' },
  { title: 'Department of Social Development Substance Abuse Helpline', phone: '0800 12 13 14' },
  { title: 'South African Emergency Number', phone: '112' },
  { title: 'Police', phone: '10111' },
];
