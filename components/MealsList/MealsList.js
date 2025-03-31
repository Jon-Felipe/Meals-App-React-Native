import { StyleSheet, FlatList, View } from 'react-native';
import React from 'react';

// components
import Meal from './Meal';

export default function MealsList({ items }) {
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
        data={items}
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
