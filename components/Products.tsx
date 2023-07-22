import React from 'react';
import {Button, Image, Text, View} from 'react-native';

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export default function Products({
  products,
  navigation,
}: {
  products: Product[];
  navigation: any;
}) {
  return (
    <View>
      {products.map(product => {
        return (
          <View key={product.id}>
            <Text>{product.name}</Text>
            <Image source={{uri: product.image}} />
            <Text>{product.price}</Text>
            <Button
              title="View Product"
              onPress={() =>
                navigation.navigate('SingleProduct', {productId: product.id})
              }
            />
          </View>
        );
      })}
    </View>
  );
}
