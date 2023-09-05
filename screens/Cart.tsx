import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export function Cart() {
  return (
    <View style={styles.cartLine}>
      <Text style={styles.lineLeft}>Old Cart Component here</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    textAlign: 'right',
  },
  itemsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
