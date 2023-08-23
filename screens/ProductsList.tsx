import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Product} from '../components/Products';
import {SingleProduct} from '../components/SingleProduct';
import {getProducts} from '../util/data';

export function ProductsList({navigation}: any) {
  const [products, setProducts] = useState<Product[]>([]);

  function renderProduct({item: product}: any) {
    return (
      <SingleProduct
        {...product}
        onPress={() => {
          navigation.navigate('ProductDetails', {
            productId: product.id,
          });
        }}
      />
    );
  }

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={item => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
