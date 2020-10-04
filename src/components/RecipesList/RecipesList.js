import React from 'react';
import { View } from 'react-native';
import { Row } from 'components/Row';
import { RecipeCard } from './RecipeCard/RecipeCard';
import { Text } from 'components/Text';
import { styles } from './style';
import { Spacer } from 'components/Spacer';
import { ScrollView } from 'react-native-gesture-handler';

const RecipesList = ({ recipes, title, small }) => (
  <View style={{ marginVertical: 20 }}>
    <Row justifyContent="space-between">
      <Text style={styles.title}>{title}</Text>
      <Text>View More</Text>
    </Row>
    <Spacer />
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {recipes.map((each) => (
        <RecipeCard recipe={each} key={each.id} small={small} />
      ))}
    </ScrollView>
  </View>
);

export default RecipesList;
