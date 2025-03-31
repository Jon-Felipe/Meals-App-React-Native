import { StyleSheet, FlatList, View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';

// components
import Meal from '../components/Meal';

// extras
import { MEALS, CATEGORIES } from '../data/dummy-data';

export default function MealsOverview({ route, navigation }) {
  const { categoryId } = route.params;

  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const { title } = CATEGORIES.find((category) => category.id === categoryId);
    navigation.setOptions({ title });
  }, [categoryId, navigation]);

  function renderMeal(itemData) {
    const { id, title, imageUrl, duration, complexity, affordability } =
      itemData.item;

    return (
      <Meal
        id={id}
        title={title}
        imageUrl={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
