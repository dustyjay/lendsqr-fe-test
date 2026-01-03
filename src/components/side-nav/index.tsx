import OrganizationIcon from '../../assets/side-nav-icons/organization.svg';
import ChevronDownIcon from '../../assets/chevron-down.svg';
import UsersIcon from '../../assets/side-nav-icons/users.svg';
import AuditLogsIcon from '../../assets/side-nav-icons/audit-logs.svg';
import DashboardIcon from '../../assets/side-nav-icons/dashboard.svg';
import DecisionModelsIcon from '../../assets/side-nav-icons/decision-models.svg';
import FeesAndChargesIcon from '../../assets/side-nav-icons/fees-and-charges.svg';
import FeesAndPricingIcon from '../../assets/side-nav-icons/fees-and-pricing.svg';
import GuarantorsIcon from '../../assets/side-nav-icons/guarantors.svg';
import KarmaIcon from '../../assets/side-nav-icons/karma.svg';
import LoanRequestsIcon from '../../assets/side-nav-icons/loan-requests.svg';
import LoansIcon from '../../assets/side-nav-icons/loans.svg';
import LogoutIcon from '../../assets/side-nav-icons/logout.svg';
import PreferencesIcon from '../../assets/side-nav-icons/preferences.svg';
import ReportsIcon from '../../assets/side-nav-icons/reports.svg';
import SavingProductsIcon from '../../assets/side-nav-icons/saving-products.svg';
import SavingsIcon from '../../assets/side-nav-icons/savings.svg';
import ServiceAccountIcon from '../../assets/side-nav-icons/service-account.svg';
import ServicesIcon from '../../assets/side-nav-icons/services.svg';
import SettlementsIcon from '../../assets/side-nav-icons/settlements.svg';
import SystemsMessagesIcon from '../../assets/side-nav-icons/systems-messages.svg';
import TransactionsIcon from '../../assets/side-nav-icons/transactions.svg';
import WhitelistIcon from '../../assets/side-nav-icons/whitelist.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import './index.scss';
import { ROUTE_KEYS } from '../../util';

const SIDE_NAV_ITEMS = {
  CUSTOMERS: [
    { link: ROUTE_KEYS.USERS_LIST, label: 'Users', icon: UsersIcon },
    {
      link: 'guarantors',
      label: 'Guarantors',
      icon: GuarantorsIcon
    },
    { link: 'loans', label: 'Loans', icon: LoansIcon },
    {
      link: 'decision-models',
      label: 'Decision Models',
      icon: DecisionModelsIcon
    },
    { link: 'savings', label: 'Savings', icon: SavingsIcon },
    {
      link: 'loan-requests',
      label: 'Loan Requests',
      icon: LoanRequestsIcon
    },
    {
      link: 'whitelist',
      label: 'Whitelist',
      icon: WhitelistIcon
    },
    {
      link: 'karma',
      label: 'Karma',
      icon: KarmaIcon
    }
  ],
  BUSINESSES: [
    {
      link: 'organization',
      label: 'Organization',
      icon: OrganizationIcon
    },

    {
      link: 'loan-products',
      label: 'Loan Products',
      icon: LoanRequestsIcon
    },
    {
      link: 'saving-products',
      label: 'Saving Products',
      icon: SavingProductsIcon
    },
    {
      link: 'fees-and-charges',
      label: 'Fees and Charges',
      icon: FeesAndChargesIcon
    },
    {
      link: 'transactions',
      label: 'Transactions',
      icon: TransactionsIcon
    },
    {
      link: 'services',
      label: 'Services',
      icon: ServicesIcon
    },

    {
      link: 'service-account',
      label: 'Service Account',
      icon: ServiceAccountIcon
    },
    {
      link: 'settlements',
      label: 'Settlements',
      icon: SettlementsIcon
    },
    {
      link: 'reports',
      label: 'Reports',
      icon: ReportsIcon
    }
  ],
  SETTINGS: [
    {
      link: 'preferences',
      label: 'Preferences',
      icon: PreferencesIcon
    },
    {
      link: 'fees-and-pricing',
      label: 'Fees and Pricing',
      icon: FeesAndPricingIcon
    },
    {
      link: 'audit-logs',
      label: 'Audit logs',
      icon: AuditLogsIcon
    },
    {
      link: 'systems-messages',
      label: 'Systems Messages',
      icon: SystemsMessagesIcon
    }
  ]
};

const SideNav = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate(ROUTE_KEYS.LOGIN);
  };

  return (
    <aside className='side-nav'>
      <ul className='side-nav__list'>
        <li>
          <button className='side-nav__item side-nav__btn full-opacity'>
            <img src={OrganizationIcon} alt='Switch Organization' />
            Switch Organization
            <img src={ChevronDownIcon} alt='Switch Organization' />
          </button>
        </li>
        <li className='side-nav__dashboard'>
          {/* <button className='side-nav__item side-nav__btn'>
            <img src={DashboardIcon} alt='Dashboard' />
            Dashboard
          </button> */}
          <NavLink
            to={ROUTE_KEYS.HOME}
            className={({ isActive }) =>
              isActive ? 'side-nav__item side-nav__link is-active' : 'side-nav__item side-nav__link'
            }>
            <img src={DashboardIcon} alt='Dashboard' className='side-nav__icon' />
            Dashboard
          </NavLink>
        </li>
        {Object.entries(SIDE_NAV_ITEMS).map(([section, items]) => (
          <li key={section}>
            <span className='side-nav__section'>{section}</span>
            <ul className='side-nav__item-list'>
              {items.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? 'side-nav__item side-nav__link is-active'
                        : 'side-nav__item side-nav__link'
                    }>
                    <img src={item.icon} alt={item.label} className='side-nav__icon' />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <hr className='side-nav__hr' />
      <ul>
        <li>
          <button className='side-nav__item side-nav__btn full-opacity' onClick={logout}>
            <img src={LogoutIcon} alt='Logout' />
            Logout
          </button>
        </li>
        <li className='side-nav__version'>v1.2.0</li>
      </ul>
    </aside>
  );
};

export default SideNav;
