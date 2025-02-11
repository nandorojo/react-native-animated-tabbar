import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { SVGProps } from './types';

const AnimatedPath = Animated.createAnimatedComponent(Path);
Animated.addWhitelistedNativeProps({
  stroke: true,
});

const LikeSVG = ({ color, size }: SVGProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 21">
      <AnimatedPath
        d="M20.84 2.61a5.5 5.5 0 00-7.78 0L12 3.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L12 19.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        stroke={color}
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LikeSVG;
