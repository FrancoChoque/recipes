import React from 'react';
import { ImageBackground, View } from 'react-native';
import background from 'assets/images/background.jpg';
import { Button } from 'components/Button';
import { Text } from 'components/Text';

export const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <ImageBackground
      source={background}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}>
      <Text>Welcome to Recipes</Text>
      <Button title="WElcome" onPress={() => navigation.navigate('Login')} />
    </ImageBackground>
  </View>
);
