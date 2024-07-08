import React from 'react';
import PropTypes from 'prop-types';
import { Check, Scan } from 'lucide-react';

const AnalyzingData = ({ className }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <button className='flex items-center px-2  text-purple-400 border  border-gray-600 rounded-full font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80'>
        <Scan className='w-4 text-purple-400 mr-2' />
        Allow access
      </button>
      <button className='flex items-center px-2 border border-gray-600 rounded-full font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80'>
        <Check className='w-4 text-green-500 mr-2' />
        #!5a8Z7Bc9X
      </button>
    </div>
  );
};

AnalyzingData.propTypes = {
  className: PropTypes.string,
};

AnalyzingData.defaultProps = {
  className: '',
};

export default AnalyzingData;
