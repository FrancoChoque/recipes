import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Formik } from 'formik';
import background from 'assets/images/background.jpg';
import { Button } from 'components/Button';
import { CheckBox } from 'components/Checkbox';
import { Input } from 'components/Input';
import { Text } from 'components/Text';
import { styles } from './style';
import { Overlay } from 'components/Overlay';
import { login } from 'store/auth/reducer';

const hardCodedUser = {
  name: 'Shubhda Sharma',
};

const mapDispatchToProps = (dispatch) => ({
  loginAction: () => dispatch(login(hardCodedUser)),
});

const LoginScreen = ({ loginAction, navigation }) => {
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
            onSubmit={(values) => loginAction()}>
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

export default connect(null, mapDispatchToProps)(LoginScreen);
