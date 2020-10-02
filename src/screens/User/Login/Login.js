import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';
import background from 'assets/images/background.jpg';
import { Button } from 'components/Button';
import { CheckBox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { Text } from 'components/Text';
import { styles } from './style';
import { Overlay } from 'components/Overlay';

export const LoginScreen = ({ navigation }) => {
  const [rememberPass, setRememberPass] = useState(false);
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        scrollEnabled={false}>
        <ImageBackground source={background} style={styles.backgroundImage}>
          <Overlay />
          <Text bold style={styles.title}>
            Recipes.
          </Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => navigation.navigate('Welcome')}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View style={styles.formContainer}>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  label="Email"
                />
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  label="Password"
                  secureTextEntry
                />
                <CheckBox
                  title="Remember my password"
                  center
                  onPress={() => setRememberPass(!rememberPass)}
                  checked={rememberPass}
                />
                <Button
                  onPress={handleSubmit}
                  title="Submit"
                  containerStyle={styles.button}
                />
                <Text>Forgot your password?</Text>
              </View>
            )}
          </Formik>
          <Text bold>
            Don't have an account? <Text link>Sign Up</Text>
          </Text>
        </ImageBackground>
      </KeyboardAwareScrollView>
    </View>
  );
};
