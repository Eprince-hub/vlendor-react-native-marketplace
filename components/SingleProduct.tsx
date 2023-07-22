import React from 'react';
import {Image, Text, View} from 'react-native';
import {Product} from './Products';

export default function SingleProduct({
  route,
  products,
}: {
  navigation: any;
  route: any;
  products: Product[];
}) {
  const {productId} = route.params;
  const singleProduct = products.find(product => product.id === productId);

  if (!singleProduct) {
    return <Text>Product not found</Text>;
  }

  return (
    <View>
      <Text>Viewing {singleProduct.name}</Text>
      <Image source={{uri: singleProduct.image}} />
      <Text>{singleProduct.price}</Text>
      <Text>{singleProduct.description}</Text>
    </View>
  );
}
