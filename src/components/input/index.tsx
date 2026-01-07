import { useState, type FC, type InputHTMLAttributes } from 'react';
import './index.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
  wrapperClassName?: string;
  inputSize?: 'regular' | 'large';
};

const Input: FC<Props> = ({
  hasError,
  inputSize = 'regular',
  wrapperClassName = '',
  className = '',
  type: defaultType,
  ...inputProps
}) => {
  const [inputType, setInputType] = useState(defaultType);

  const toggleInputType = () => {
    setInputType((t) => (t === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={`input-wrapper ${hasError ? 'input-error' : ''} ${wrapperClassName}`}>
      <input
        {...inputProps}
        className={`input-box input-${inputSize} ${className}`}
        type={inputType}
      />
      {defaultType === 'password' && (
        <button type='button' className='input-password__btn' onClick={toggleInputType}>
          {inputType === 'password' ? 'SHOW' : 'HIDE'}
        </button>
      )}
    </div>
  );
};

export default Input;
