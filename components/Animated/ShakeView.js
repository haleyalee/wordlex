import React, { useRef, useEffect } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

const ShakeView = (props) => {
  const {style, children} = props;
  const shakeAnim = useRef(new Animated.Value(0)).current 

  useEffect(() => {
    Animated.timing(
      shakeAnim,
      {
        duration: 400,
        toValue: 3,
        ease: Easing.bounce
      }
    ).start();
  }, [shakeAnim])

  const startShake = () => {
    Animated.sequence([
      Animated.timing(this.shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(this.shakeAnim, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(this.shakeAnim, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(this.shakeAnim, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  }

  return (
    <Animated.View
      style={{
        ...style,
        transform: [{translateX: shakeAnim}]
      }}
    >
      {children}
    </Animated.View>
  );
}

export default ShakeView;