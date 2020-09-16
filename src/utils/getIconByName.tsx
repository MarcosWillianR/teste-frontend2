import React from 'react';
import {
  IconDate,
  IconImage,
  IconPlace,
  IconPerson,
} from '../components/Icons';

interface IconProps {
  name: 'date' | 'image' | 'place' | 'person';
}

const Icon: React.FC<IconProps> = ({ name }) => {
  let RenderedIcon = <span />;

  switch (name) {
    case 'date': {
      RenderedIcon = <IconDate size={18} />;
      break;
    }
    case 'image': {
      RenderedIcon = <IconImage size={18} />;
      break;
    }
    case 'place': {
      RenderedIcon = <IconPlace size={18} />;
      break;
    }
    case 'person': {
      RenderedIcon = <IconPerson size={18} />;
      break;
    }
  }

  return RenderedIcon;
};

export default Icon;
