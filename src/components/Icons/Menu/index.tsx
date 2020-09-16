import React from 'react';
import { LABEL_COLOR } from '../../../styles/variables';

import IconDTO from '../IconDTO';

const IconMenu: React.FC<IconDTO> = ({ size, color }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 8.4C3.59998 8.08174 3.7264 7.77652 3.95145 7.55147C4.17649 7.32643 4.48172 7.2 4.79998 7.2H19.2C19.5182 7.2 19.8235 7.32643 20.0485 7.55147C20.2735 7.77652 20.4 8.08174 20.4 8.4C20.4 8.71826 20.2735 9.02349 20.0485 9.24853C19.8235 9.47357 19.5182 9.6 19.2 9.6H4.79998C4.48172 9.6 4.17649 9.47357 3.95145 9.24853C3.7264 9.02349 3.59998 8.71826 3.59998 8.4Z" fill={color || LABEL_COLOR} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59998 15.6C3.59998 15.2817 3.7264 14.9765 3.95145 14.7515C4.17649 14.5264 4.48172 14.4 4.79998 14.4H19.2C19.5182 14.4 19.8235 14.5264 20.0485 14.7515C20.2735 14.9765 20.4 15.2817 20.4 15.6C20.4 15.9183 20.2735 16.2235 20.0485 16.4485C19.8235 16.6736 19.5182 16.8 19.2 16.8H4.79998C4.48172 16.8 4.17649 16.6736 3.95145 16.4485C3.7264 16.2235 3.59998 15.9183 3.59998 15.6Z" fill={color || LABEL_COLOR} />
    </svg>
  );
};

export default IconMenu;
