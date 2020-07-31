import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, name, type, value, onChange, className,
}) {
  const fieldId = `if_${name}`;

  if (type === 'textarea') {
    return (
      <div>
        <textarea className={className} name={name} value={value} onChange={onChange} />
        <span className="formLabel" htmlFor={fieldId}>{label}</span>
      </div>
    );
  }
  return (
    <div>
      <input
        className={className}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      />
      <span className="formLabel" htmlFor={fieldId}>{label}</span>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string.isRequired,
};

export default FormField;
