import React from 'react';
import PropTypes from 'prop-types';
import { ShieldAlert } from 'lucide-react';

const SecuredData = ({ className }) => {
  const baseClasses = 'flex items-center px-2 border border-gray-600 rounded-xl font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <button className={combinedClasses}>
      <ShieldAlert className='w-4 mr-2 text-red-400' />
      #!5a8Z7Bc9X
    </button>
  );
};

SecuredData.propTypes = {
  className: PropTypes.string,
};

SecuredData.defaultProps = {
  className: '',
};

export default SecuredData;
