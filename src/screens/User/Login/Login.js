import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Formik } from 'formik';
import background from 'assets/images/background.jpg';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Text } from 'components/Text';
import { CheckBox } from 'react-native-elements';
import { styles } from './style';

export const LoginScreen = ({ navigation }) => {
  const [rememberPass, setRememberPass] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <Text>Recipes</Text>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values) => console.log(values)}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                label="Email"
              />
              <CheckBox
                title="Click Here"
                onIconPress={() => setRememberPass(!rememberPass)}
                checked={rememberPass}
              />
              <Button
                onPress={handleSubmit}
                title="Submit"
                buttonStyle={{ opacity: 0.75 }}
              />
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
};
