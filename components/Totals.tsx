import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CartContext} from '../components/CartContext';

export default function Totals() {
  const {getTotalPrice} = useContext<any>(CartContext);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(getTotalPrice());
  }, [getTotalPrice]);
  return (
    <View style={styles.cartLineTotal}>
      <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
      <Text style={styles.lineRight}>$ {total}</Text>
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
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
