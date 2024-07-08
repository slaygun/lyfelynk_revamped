import React from 'react';
import PropTypes from 'prop-types';
import { BookHeart, Check, Scan, UserRound } from 'lucide-react';

const AnonData = ({ className }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <button className='flex items-center px-2  text-teal-400 border  border-gray-600 rounded-full font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80'>
        <UserRound className='w-4 text-teal-400' />
        <BookHeart className='w-4 text-teal-400 mr-2' />
        *******
      </button>

    </div>
  );
};

AnonData.propTypes = {
  className: PropTypes.string,
};

AnonData.defaultProps = {
  className: '',
};

export default AnonData;
