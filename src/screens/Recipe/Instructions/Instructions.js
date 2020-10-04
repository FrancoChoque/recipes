import React from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Row } from 'components/Row';
import { Text } from 'components/Text';
import { styles } from './style';

const Instructions = ({ route }) => {
  const { recipe } = route.params;
  console.log(recipe);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title} bold>
        {recipe.title}
      </Text>
      <View style={{ margin: 20 }}>
        <Text style={styles.title}>Step by step process</Text>
        {recipe.analyzedInstructions[0].steps.map((each) => (
          <View style={{ marginVertical: 5 }} key={each.number}>
            <Text style={{ fontSize: 18 }}>
              {each.number}) {each.step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Instructions;
