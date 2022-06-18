import { View, StyleSheet } from 'react-native';

function Card({ children, cardStyle }) {
  return <View style={[styles.card, cardStyle]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
