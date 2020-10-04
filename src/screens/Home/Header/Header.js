import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'components/Text';
import { style } from './style';

const mapStateToProps = ({ authReducer }) => ({
  user: authReducer.user,
});

const Header = ({ user }) => (
  <View style={style.container}>
    <Text style={style.greeting}>Good Morning</Text>
    <Text bold style={style.title}>
      {user.name}
    </Text>
  </View>
);

export default connect(mapStateToProps)(Header);
