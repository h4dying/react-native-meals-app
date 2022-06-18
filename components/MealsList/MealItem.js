import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../Card';
import MealDetails from '../MealDetails';

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate('MealDetails', {
      mealId: id,
    });
  }
  const MealDetailsProps = {
    affordability,
    complexity,
    duration,
  };
  return (
    <Card>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={handlePress}
      >
        {/* we put this to fix the issue in IOS, that hide the border. */}
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails {...MealDetailsProps} />
        </View>
      </Pressable>
    </Card>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
