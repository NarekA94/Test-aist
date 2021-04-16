import React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

export const PeopleSvg = props => (
  <Svg width={25.195} height={25.187} viewBox="0 0 25.195 25.187" {...props}>
    <Circle className="st0" cx={16} cy={16} r={14} />
    <Circle className="st0" cx={16} cy={13} r={5} />
    <Path
      className="st0"
      d="M5.4,25.1c1.8-4.1,5.8-7,10.6-7c4.8,0,8.9,2.9,10.6,7"
    />
  </Svg>
);
