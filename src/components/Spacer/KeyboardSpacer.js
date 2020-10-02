import React, { useEffect, useState } from 'react'
import { Animated, Easing, Platform, View } from 'react-native'
import { useKeyboardHeight } from 'services/hooks/useKeyboardHeight'

export const KeyboardSpacer = props => {
  if (Platform.OS === 'android') {
    return null
  }

  const height = useKeyboardHeight()

  // eslint-disable-next-line prettier/prettier
  return (
    <View
      {...props}
      style={[props.style, { height }]}
    />
  )
}

KeyboardSpacer.Animated = ({ style, timingConfiguration, listener, ...viewProps }) => {
  if (Platform.OS === 'android') {
    return null
  }

  const height = useKeyboardHeight()
  const [heightAnimated] = useState(new Animated.Value(0))

  useEffect(() => {
    if (listener) {
      heightAnimated.removeAllListeners()
      heightAnimated.addListener(listener)
    }
  }, [listener])

  useEffect(() => {
    Animated.timing(heightAnimated, {
      toValue: height,
      delay: 0,
      duration: 500,
      easing: Easing.bezier(0.42, 0, 0.58, 1),
      useNativeDriver: false,
      ...(timingConfiguration ?? {}),
    }).start()
  }, [heightAnimated, height])

  return <Animated.View {...viewProps} style={[{ height: heightAnimated }, style]} />
}
