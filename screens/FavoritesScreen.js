// import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeal.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
