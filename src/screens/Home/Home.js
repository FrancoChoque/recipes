import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getRecipes } from 'store/recipes/actions';
import Header from './Header/Header';
import { style } from './style';
import RecipesList from 'components/RecipesList/RecipesList';
import { ScrollView } from 'react-native-gesture-handler';

const mapStateToProps = ({ recipesReducer }) => ({
  recipes: recipesReducer.recipes,
  recommended: recipesReducer.recommended,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipesAction: () => dispatch(getRecipes()),
});

class HomeScreen extends Component {
  componentDidMount() {
    const { getRecipesAction } = this.props;
    getRecipesAction();
  }

  render() {
    const { recipes, recommended } = this.props;
    return (
      <ScrollView style={style.container}>
        <Header />
        <RecipesList title="Recently Viewed" recipes={recipes} small />
        <RecipesList title="Recommended" recipes={recommended} />
        <RecipesList title="My recipes" recipes={recipes} />
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
