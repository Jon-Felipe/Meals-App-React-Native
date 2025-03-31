import React, { useLayoutEffect } from 'react';

// components
import MealsList from '../components/MealsList/MealsList';

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

  return <MealsList items={meals} />;
}
