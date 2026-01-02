import { Link } from 'react-router-dom';
import LoginImage from '../../assets/login-image.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import { useState, type FormEvent } from 'react';
import './index.scss';

const LeftHandSide = () => {
  return (
    <div className='auth-lhs'>
      <img src={LoginImage} alt='Login to Lendsqr' />
    </div>
  );
};

const RightHandSide = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data', formData);
  };

  return (
    <section className='auth-rhs'>
      <div className='auth-rhs__wrapper'>
        <h1 className='auth-rhs__header'>Welcome.</h1>
        <h3 className='auth-rhs__sub-header'>Enter details to login.</h3>

        <form onSubmit={handleSubmit} className='auth-form'>
          <Input
            inputSize='large'
            name='email'
            type='email'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            inputSize='large'
            name='password'
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Link className='auth-form__link' to='#'>
            FORGOT PASSWORD?
          </Link>

          <Button type='submit' size='large'>
            LOG IN
          </Button>
        </form>
      </div>
    </section>
  );
};

const LoginPage = () => {
  return (
    <div className='auth-page'>
      <div className='auth-header'>
        <img src='/lendsqr.svg' alt='Lendsqr' />
      </div>
      <LeftHandSide />
      <RightHandSide />
    </div>
  );
};

export default LoginPage;
