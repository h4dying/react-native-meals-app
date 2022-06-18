import { FlatList } from 'react-native';
import CategoriesGridTile from '../components/CategoriesGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function handlePress() {
      navigation.navigate('MealsOverview', {
        categoryId: item.id,
        // categoryTitle: item.title,
      });
    }
    return (
      <CategoriesGridTile
        title={item.title}
        color={item.color}
        onPress={handlePress}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
