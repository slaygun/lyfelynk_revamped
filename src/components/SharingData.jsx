import React from 'react';
import PropTypes from 'prop-types';

const SharingData = ({ className }) => {
  const baseClasses = 'flex items-center py-1 px-2 border border-gray-600 rounded-full font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <button className={combinedClasses}>
      <div className="loader mr-4" />
      Sharing Health Data
    </button>
  );
};

SharingData.propTypes = {
  className: PropTypes.string,
};

SharingData.defaultProps = {
  className: '',
};

export default SharingData;
