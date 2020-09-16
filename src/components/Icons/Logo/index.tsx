import React from 'react';
import { LABEL_COLOR } from '../../../styles/variables';

import IconDTO from '../IconDTO';

const IconLogo: React.FC<IconDTO> = ({ size, color }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.25"
        d="M23 5.98895L12 12L1 5.98895C1.22581 5.61957 1.54789 5.31092 1.9356 5.09234L10.6634 0.331492C11.4921 -0.110497 12.5079 -0.110497 13.3366 0.331492L22.0644 5.09234C22.452 5.31081 22.7741 5.6202 23 5.98895Z"
        fill={color || LABEL_COLOR}
      />
      <path
        opacity="0.5"
        d="M12 12.0084V24C11.592 23.9994 11.1894 23.9088 10.8224 23.7349L2.29412 18.9257C1.90131 18.704 1.57504 18.3857 1.34794 18.0024C1.12084 17.6192 1.00086 17.1846 1 16.7419V7.2749C1.00214 6.82769 1.12248 6.38859 1.34941 6L12 12.0084Z"
        fill={color || LABEL_COLOR}
      />
      <path
        d="M23 7.2749V16.7419C22.9991 17.1846 22.8792 17.6192 22.6521 18.0024C22.425 18.3857 22.0987 18.704 21.7059 18.9257L13.1388 23.7475C12.7829 23.9116 12.3934 23.9975 12 24V12.0084L22.6506 6C22.8771 6.38878 22.9974 6.82805 23 7.2749Z"
        fill={color || LABEL_COLOR}
      />
    </svg>
  );
};

export default IconLogo;
