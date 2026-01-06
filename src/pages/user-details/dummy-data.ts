import type { UserType } from "../../models/user.model";


export const userDetails: UserType = {
  id: 'LSQFf587g90',
  firstName: 'Jane',
  lastName: 'Doe',
  username: 'dusty',
  createdAt: 'Apr 30, 2020 10:00 AM',
  tier: 1,
  avatar: null,
  phoneNumber: '070001112233',
  email: 'jane@doe.com',
  bvn: '12345678901',
  gender: 'female',
  maritalStatus: 'single',
  children: 0,
  residenceType: "Parent's Apartment",
  status: 'Active',
  organization: 'Meta Inc',
  balance: 300000,
  education: {
    level: 'B.Sc'
  },
  loan: {
    repayment: 40000,
    currency: 'naira'
  },
  employment: {
    status: 'employed',
    sector: 'FinTech',
    duration: '2 years',
    officeEmail: 'doe@google.com',
    monthIncomeMin: 200000,
    monthIncomeMax: 400000,
    currency: 'naira'
  },
  bankDetails: {
    name: 'Providus Bank',
    accountNumber: '9912345678'
  },
  socials: {
    twitter: '@janedoe',
    facebook: 'Jane Doe',
    instagram: '@jane_doe'
  },
  guarantor: {
    firstName: 'Christine',
    lastName: 'Aguilera',
    phoneNumber: '08134567382',
    email: 'christine@aguilera.music',
    relationship: 'Sister'
  }
};
