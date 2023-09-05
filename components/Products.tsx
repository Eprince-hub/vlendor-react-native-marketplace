import React from 'react';
// import {Button, Image, Text, View} from 'react-native';
import {
  StyleProp,
  View as NativeView,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';

const LeftContent = (
  props: React.JSX.IntrinsicAttributes &
    ViewProps &
    React.RefAttributes<NativeView> & {
      icon: IconSource;
      size?: number | undefined;
      color?: string | undefined;
      style?: StyleProp<ViewStyle>;
      theme?: ThemeProp | undefined;
    },
) => <Avatar.Icon {...props} icon="folder" />;

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  onPress?: () => void;
};

export default function Products({
  products,
  navigation,
}: {
  products: Product[];
  navigation: any;
}) {
  return (
    <NativeView>
      {products.map(product => {
        return (
          <Card key={product.id}>
            <Card.Title
              title="Card Title"
              subtitle="Card Subtitle"
              left={LeftContent as any}
            />
            <Card.Content>
              <Text>{product.name}</Text>
            </Card.Content>
            <Card.Cover source={require(product.image)} />
            <Text>{product.price}</Text>
            <Card.Actions>
              <Button
                onPress={() =>
                  navigation.navigate('SingleProduct', {productId: product.id})
                }>
                <Text>View Product</Text>
              </Button>
            </Card.Actions>
          </Card>
        );
      })}
    </NativeView>
  );
}
