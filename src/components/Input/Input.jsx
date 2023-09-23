import React from 'react';
import Error from '../Errors/Error';
import './Input.css';

export default function Input({
    className,
    errors,
    disabled,
    inputStyle,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    type,
    value
  }){
    const inputRef = React.useRef(null);
  
    const handleClick = () => {
      if (inputRef && inputRef.current) inputRef.current.focus();
    };
  
    return (
      <div className="custom_input" onClick={handleClick}>
          {/* {icon && <Icon dataTestId={`icon-${name}`} type={icon} />} */}
          <input
            ref={inputRef}
            aria-label={name}
            data-testid={name}
            tabIndex={0}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            style={inputStyle}
            disabled={disabled}
            readOnly={readOnly}
          />
        {errors && !value && required && (
          <Error>Required!</Error>
        )}
      </div>
    );
  };
