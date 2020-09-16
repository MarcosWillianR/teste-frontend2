import React from 'react';
import { LABEL_COLOR } from '../../../styles/variables';

import IconDTO from '../IconDTO';

const IconDate: React.FC<IconDTO> = ({ size, color }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M22 10H2V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V10ZM7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8ZM17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8Z"
        fill={color || LABEL_COLOR}
      />
      <path
        d="M19 4H18V7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7V4H8V7C8 7.26522 7.89464 7.51957 7.70711 7.70711C7.51957 7.89464 7.26522 8 7 8C6.73478 8 6.48043 7.89464 6.29289 7.70711C6.10536 7.51957 6 7.26522 6 7V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V10H22V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4Z"
        fill={color || LABEL_COLOR}
      />
    </svg>
  );
};

export default IconDate;