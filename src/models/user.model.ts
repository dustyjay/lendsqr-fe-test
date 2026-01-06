export type USER_TABLE_KEY =
  | 'organization'
  | 'username'
  | 'email'
  | 'phoneNumber'
  | 'status';

export type USER_TABLE_STATUS = 'Inactive' | 'Pending' | 'Blacklisted' | 'Active';
export type CurrencyType = 'naira' | 'usd';
export type GenderType = 'male' | 'female';
export type MaritalStatusType = 'single' | 'married' | 'divorced';
export type UserStatusType = 'Inactive' | 'Pending' | 'Blacklisted' | 'Active';
export type EmploymentStatusType = 'employed' | 'unemployed' | 'self-employed';

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  tier: number;
  avatar: string | null;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: GenderType;
  maritalStatus: MaritalStatusType;
  children: number;
  residenceType: string;
  status: UserStatusType;
  createdAt: string
  organization: string
  balance: number;
  education: {
    level: string;
  };
  loan: {
    repayment: number;
    currency: CurrencyType;
  };
  employment: {
    status: EmploymentStatusType;
    sector: string;
    duration: string;
    officeEmail: string;
    monthIncomeMin: number;
    monthIncomeMax: number;
    currency: CurrencyType;
  };
  bankDetails: {
    name: string;
    accountNumber: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
};
