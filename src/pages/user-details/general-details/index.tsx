import { useOutletContext } from 'react-router-dom';
import { useMemo } from 'react';
import BaseCard from '../../../components/base-card';
import './index.scss';
import type { UserOutletObj } from '..';

const UserGeneralDetailsPage = () => {
  const { user } = useOutletContext<UserOutletObj>();

  const personalInfo = useMemo(() => {
    return [
      {
        label: 'Full name',
        value: `${user.firstName} ${user.lastName}`
      },
      {
        label: 'Phone number',
        value: user.phoneNumber
      },
      { label: 'Email address', value: user.email },
      { label: 'BVN', value: user.bvn },
      { label: 'Gender', value: user.gender },
      { label: 'Marital Status', value: user.maritalStatus },
      { label: 'Children', value: user.children === 0 ? 'None' : user.children },
      { label: 'Type od residence', value: user.residenceType }
    ];
  }, [user]);

  const employInfo = useMemo(() => {
    return [
      {
        label: 'Level of education',
        value: user.education.level
      },
      {
        label: 'Employment status',
        value: user.employment.status
      },
      { label: 'Sector of employment', value: user.employment.sector },
      // TODO :: use date instead to determine duration
      { label: 'Duration of employment', value: user.employment.duration },
      { label: 'Office email', value: user.employment.officeEmail },
      // TODO :: format currency properly
      {
        label: 'Monthly income',
        value: `N${user.employment.monthIncomeMin}-N${user.employment.monthIncomeMax}`
      },
      { label: 'Loan repayment', value: `N${user.loan.repayment}` }
    ];
  }, [user]);

  const socialsInfo = useMemo(() => {
    return [
      {
        label: 'Twitter',
        value: user.socials.twitter
      },
      {
        label: 'Facebook',
        value: user.socials.facebook
      },
      { label: 'Instagram', value: user.socials.instagram }
    ];
  }, [user]);

  const guarantorInfo = useMemo(() => {
    return [
      {
        label: 'Full name',
        value: `${user.guarantor.firstName} ${user.guarantor.lastName}`
      },
      {
        label: 'Phone number',
        value: user.guarantor.phoneNumber
      },
      { label: 'Email address', value: user.guarantor.email },
      { label: 'Relationship', value: user.guarantor.relationship }
    ];
  }, [user]);

  return (
    <BaseCard>
      <section className='user-section'>
        <h5 className='user-section__title'>Personal Information</h5>
        <ul className='user-section__grid'>
          {personalInfo.map((info) => (
            <li key={info.label} className='user-section__item'>
              <span className='user-section__label'>{info.label}</span>
              <span className='user-section__value'>{info.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='user-section'>
        <h5 className='user-section__title'>Education and Employment</h5>
        <ul className='user-section__grid grid-4'>
          {employInfo.map((info) => (
            <li key={info.label} className='user-section__item'>
              <span className='user-section__label'>{info.label}</span>
              <span className='user-section__value'>{info.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='user-section'>
        <h5 className='user-section__title'>Socials</h5>
        <ul className='user-section__grid'>
          {socialsInfo.map((info) => (
            <li key={info.label} className='user-section__item'>
              <span className='user-section__label'>{info.label}</span>
              <span className='user-section__value'>{info.value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='user-section'>
        <h5 className='user-section__title'>Guarantor</h5>
        <ul className='user-section__grid'>
          {guarantorInfo.map((info) => (
            <li key={info.label} className='user-section__item'>
              <span className='user-section__label'>{info.label}</span>
              <span className='user-section__value'>{info.value}</span>
            </li>
          ))}
        </ul>
      </section>
    </BaseCard>
  );
};

export default UserGeneralDetailsPage;
