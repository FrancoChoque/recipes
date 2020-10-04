import React from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native';
import { Row } from 'components/Row';
import { Text } from 'components/Text';
import { styles } from './style';
import { Spacer } from 'components/Spacer';

const Recipe = ({ route, navigation }) => {
  const { recipe } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Instructions', { recipe })}>
        <Image source={{ uri: recipe.image }} style={styles.image} on />
      </TouchableWithoutFeedback>
      <Text style={[styles.title, { textAlign: 'center' }]} bold>
        {recipe.title}
      </Text>
      <Spacer />
      <Row justifyContent="space-evenly">
        <Text style={styles.detailsText}>Time-{recipe.readyInMinutes} min</Text>
        <Text style={styles.detailsText}>Serve-{recipe.servings} people</Text>
      </Row>
      <View style={{ margin: 20 }}>
        <Text style={styles.title}>Ingredients</Text>
        {recipe.extendedIngredients.map((each, index) => (
          <View style={{ marginVertical: 5 }} key={`${each.id}-${index}`}>
            <Text style={{ fontSize: 18 }}>. {each.original}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Recipe;
