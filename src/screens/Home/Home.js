import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getRecipes } from 'store/recipes/actions';
import Header from './Header/Header';
import { style } from './style';

const mapStateToProps = ({ recipesReducer }) => ({
  recipes: recipesReducer.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipesAction: () => dispatch(getRecipes()),
});

class HomeScreen extends Component {
  componentDidMount() {
    const { getRecipesAction } = this.props;
    // getRecipesAction();
  }

  render() {
    return (
      <View style={style.container}>
        <Header />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
