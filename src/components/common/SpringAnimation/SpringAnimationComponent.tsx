import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = {
  children: JSX.Element;
};

const SpringAnimationComponent = ({ children }: Props) => {
  const animation = new Animated.Value(0);
  const animationStyles = {
    transform: [{ translateY: animation }],
  };

  useEffect(() => {
    Animated.spring(animation, {
      toValue: moderateScale(300, 0.3),
      delay: 500,
      useNativeDriver: false,
      friction: 1,
      tension: 10,
    }).start();
  }, [animation]);

  return <Animated.View style={animationStyles}>{children}</Animated.View>;
};

export default SpringAnimationComponent;
