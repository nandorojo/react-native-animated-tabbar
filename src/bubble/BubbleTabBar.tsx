import React, { useMemo, memo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
// @ts-ignore 😞
import isEqual from 'lodash.isequal';
import BubbleTabBarItem from './item';
import { TabBarViewProps } from '../types';
import {
  DEFAULT_ITEM_ANIMATION_DURATION,
  DEFAULT_ITEM_ANIMATION_EASING,
  DEFAULT_ITEM_INNER_SPACE,
  DEFAULT_ITEM_OUTER_SPACE,
  DEFAULT_ITEM_ICON_SIZE,
  DEFAULT_ITEM_LAYOUT_DIRECTION,
} from './constants';
import { styles } from './styles';

const BubbleTabBarComponent = ({
  selectedIndex,
  routes,
  duration = DEFAULT_ITEM_ANIMATION_DURATION,
  easing = DEFAULT_ITEM_ANIMATION_EASING,
  itemInnerSpace = DEFAULT_ITEM_INNER_SPACE,
  itemOuterSpace = DEFAULT_ITEM_OUTER_SPACE,
  iconSize = DEFAULT_ITEM_ICON_SIZE,
  isRTL = DEFAULT_ITEM_LAYOUT_DIRECTION,
  style: containerStyleOverride,
}: TabBarViewProps) => {
  //#region Hooks
  const safeArea = useSafeArea();
  //#endregion

  //#region Styles
  const containerStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      styles.container,
      containerStyleOverride,
      {
        flexDirection: isRTL ? 'row-reverse' : 'row',
        paddingBottom: safeArea.bottom,
      },
    ],
    [safeArea, containerStyleOverride, isRTL]
  );
  //#endregion
  return (
    <View style={containerStyle}>
      {routes.map(({ key, title, ...configs }, index) => {
        return (
          <BubbleTabBarItem
            key={key}
            index={index}
            selectedIndex={selectedIndex}
            label={title}
            duration={duration}
            easing={easing}
            itemInnerSpace={itemInnerSpace}
            itemOuterSpace={itemOuterSpace}
            iconSize={iconSize}
            isRTL={isRTL}
            {...configs}
          />
        );
      })}
    </View>
  );
};

const BubbleTabBar = memo(BubbleTabBarComponent, (prevProps, nextProps) =>
  isEqual(prevProps, nextProps)
);

export default BubbleTabBar;
