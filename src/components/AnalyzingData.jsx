import React from 'react';
import PropTypes from 'prop-types';
import { Check, FileSearch } from 'lucide-react';

const AnalyzingData = ({ className }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <button className='flex items-center px-2 border border-gray-600 rounded-full font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80'>
        <FileSearch className='w-4 text-pink-400 mr-4' />
        Analyzing
      </button>
      <button className='flex items-center px-2 border border-gray-600 rounded-full font-roboto-mono font-medium text-sm bg-gray-600 bg-opacity-80'>
        <Check className='w-4 text-pink-400 mr-4' />
        Done
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
