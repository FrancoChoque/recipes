import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import background from 'assets/images/background.jpg';

export const WelcomeScreen = () => (
  <View style={{ flex: 1 }}>
    <ImageBackground
      source={background}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
      <Text>Welcome</Text>
    </ImageBackground>
  </View>
);
