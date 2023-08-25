import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {getProduct} from '../util/data';

export function ProductDetails({route}: any) {
  const {productId} = route.params;
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    setProduct(getProduct(productId));
  }, [productId]);

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={require('../assets/productImages/cleaning.jpg')}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
