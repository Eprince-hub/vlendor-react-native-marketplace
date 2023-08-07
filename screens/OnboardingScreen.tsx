import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {setItem} from '../util/asyncStorage';

const {width} = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation<any>();

  const handleDone = () => {
    navigation.navigate('MainScreens');
    setItem('onboarded', '1');
  };

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={styles.containerStyle}
        pages={[
          {
            backgroundColor: '#3486f0',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/animations/boost.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Online Shopping Made Easy',
            subtitle:
              'One click buy that makes your shopping experience a wonderful and easy one',
          },
          {
            backgroundColor: '#b46cf8',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/animations/work.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Instant Delivery',
            subtitle:
              'Get what you ordered in a matter of minutes, as we use a revolutionized AI system to deliver your order instantly',
          },
          {
            backgroundColor: '#f5e186',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/animations/achieve.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Achievers Marketplace',
            subtitle:
              'Are you a seller? You are at the right place. We provide you with a platform to sell your products and earn money',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width / 2,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
  containerStyle: {
    paddingHorizontal: 15,
  },
});
