import { useNavigation } from '@react-navigation/native';
import { Text } from 'components/Text';
import React from 'react';
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { getDimensions, getImageDimensions, styles } from './style';

export const RecipeCard = ({ recipe, small }) => {
  const navigation = useNavigation();
  const handleTouch = () => {
    navigation.navigate('Recipe', { recipe });
  };

  return (
    <TouchableWithoutFeedback
      style={[styles.container, getDimensions(small)]}
      onPress={handleTouch}>
      <Image
        source={{ uri: recipe.image }}
        style={[styles.image, getImageDimensions(small)]}
      />
      <Text numberOfLines={1}>{recipe.title}</Text>
    </TouchableWithoutFeedback>
  );
};
