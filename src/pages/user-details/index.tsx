import BaseCard from '../../components/base-card';
import UserIcon from '../../assets/user.svg';
import BackButtonIcon from '../../assets/back-button.svg';
import StarFilledIcon from '../../assets/star-filled.svg';
import StarIcon from '../../assets/star.svg';
import './index.scss';
import { Fragment, useEffect, useMemo, useState } from 'react';
import Button from '../../components/button';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import HorizontalMenu from '../../components/horizontal-menu';
import type { UserType } from '../../models/user.model';

export type UserOutletObj = {
  user: UserType;
};

const UserDetailsPage = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<UserType[]>([]);

  if (!userId) {
    // show error or return to previous screen
    setTimeout(() => {
      navigate(-1);
    }, 2000);
    return null;
  }

  const user = useMemo(() => {
    const userData = allUsers.find(({ id }) => id === userId);

    if (!userData) {
      // Show 404, user not found
      return;
    }

    localStorage.setItem('USER', JSON.stringify(userData));
    return userData;
  }, [userId, allUsers]);

  const UserTier = useMemo(() => {
    if (!user) return null;

    return [1, 2, 3].map((star) => {
      const icon = user.tier >= star ? StarFilledIcon : StarIcon;
      return <img src={icon} alt={String(user.tier)} />;
    });
  }, [user]);

  useEffect(() => {
    const fetchListOfUsers = async () => {
      try {
        const fetchRes = await fetch('https://mocki.io/v1/c6aca6f4-ea0a-47ed-ab9d-09ea624749a3');
        const res: UserType[] = await fetchRes.json();

        setAllUsers(res);
      } catch (error) {
        // TODO :: handle error messages shown to user
        console.error('An error occurred fetching list of users');
      }
    };

    fetchListOfUsers();
  }, []);

  if (!user) {
    return <p>User not found</p>;
  }

  const USER_ROUTE_MENU = [
    {
      label: 'General Details',
      link: `/users/${user.id}`
    },
    { label: 'Documents', link: `/users/${user.id}/documents` },
    { label: 'Bank Details', link: `/users/${user.id}/bank-details` },
    {
      label: 'Loans',
      link: `/users/${user.id}/loans`
    },
    {
      label: 'Savings',
      link: `/users/${user.id}/savings`
    },
    { label: 'App and System', link: `/users/${user.id}/app-system` }
  ];

  return (
    <Fragment>
      <nav className='page-nav'>
        <Link to='..' className='page-nav__link'>
          <img src={BackButtonIcon} alt='Go back' /> Back to Users
        </Link>
      </nav>
      <div className='page-header'>
        <h1 className='page-title'>User Details</h1>
        <div className='page-header__cta'>
          <Button variant='outline' color='danger'>
            BLACKLIST&nbsp;USER
          </Button>
          <Button variant='outline'>ACTIVATE USER</Button>
        </div>
      </div>
      <BaseCard>
        <div className='user-metadata'>
          <div className='user-metadata__name'>
            <div className={`user-metadata__avatar ${user.avatar ? '' : 'is-icon'}`}>
              <img src={user.avatar || UserIcon} alt={user.username} />
            </div>
            <div>
              <h2 className='user-metadata__user'>
                {user.firstName} {user.lastName}
              </h2>
              <p className='user-metadata__id'>{user.id}</p>
            </div>
          </div>
          <div className='user-metadata__tier'>
            <p>User's Tier</p>
            <div className='user-metadata__stars'>{UserTier}</div>
          </div>
          <div className='user-metadata__bank'>
            <h4 className='user-metadata__balance'>N{user.balance}</h4>
            <p className='user-metadata__acct'>
              {user.bankDetails.accountNumber}/{user.bankDetails.name}
            </p>
          </div>
        </div>
        <div className='user-metadata__nav'>
          <HorizontalMenu list={USER_ROUTE_MENU} />
        </div>
      </BaseCard>
      <div className='user-outlet'>
        <Outlet context={{ user }} />
      </div>
    </Fragment>
  );
};

export default UserDetailsPage;
