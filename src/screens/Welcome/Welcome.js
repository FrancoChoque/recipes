import React from 'react';
import { ImageBackground, View } from 'react-native';
import background from 'assets/images/background.jpg';
import { Button } from 'components/Button';
import { Text } from 'components/Text';
import { Overlay } from 'components/Overlay';
import { styles } from './style';
import { Spacer } from 'components/Spacer';

export const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={background} style={styles.backgroundImage}>
      <Overlay />
      <Text style={styles.subTitle}>Welcome to</Text>
      <Text style={styles.title} bold>
        Recipes
      </Text>
      <Spacer height={50} />
      <Button
        title="Start Cooking"
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Login')}
      />
    </ImageBackground>
  </View>
);
