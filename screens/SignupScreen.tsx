import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Snackbar, Text} from 'react-native-paper';
import CustomDropdown from '../components/Dropdown';
import PhoneNumberInput from '../components/PhoneNumberInput';
import SingleDatePickerInput from '../components/SingleDatePickerInput';
import TextInputWithIcon from '../components/TextInputWithIcon';
import {useAppContext} from '../util/AppContextProviders';
import {signupHandler} from '../util/auth/apiHandlers/signup';
import isUserLoggedIn from '../util/auth/user';
import {countriesStatesAndLocalGovt} from '../util/countries';

const SignUpScreen: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [basicInfo, setBasicInfo] = useState<{
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
  }>({
    firstName: '',
    lastName: '',
    dateOfBirth: '' as unknown as Date,
  });

  const [location, setLocation] = useState<{
    selectedCountry: string;
    selectedState: string;
    selectedLocalGovt: string;
    address: string;
    postalCode: string;
    phoneNumber: string;
  }>({
    selectedCountry: '',
    selectedState: '',
    selectedLocalGovt: '',
    address: '',
    postalCode: '',
    phoneNumber: '',
  });

  const [profileInfo, setProfileInfo] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
    },
  });

  const navigation = useNavigation<any>();
  const {userDispatch, userState} = useAppContext();

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  // TODO: Implement a better form submission with validation
  const handleFormSubmission = async () => {
    try {
      const response = await signupHandler({basicInfo, location, profileInfo});

      if (response.status === 200) {
        userDispatch({
          type: 'SET_USER_PROFILE',
          payload: response.SignedUser,
        });
        // TODO: Fix this function's TypeScript error on Usage
        // userDispatch(setUserProfile(response.SignedUser));
      }
    } catch (error) {
      setErrorMessage((error as Error).message);
    }
  };

  const selectedCountryData = countriesStatesAndLocalGovt.find(
    country => country.country === location.selectedCountry,
  );

  const selectedStateData = selectedCountryData?.states.find(
    state => state.state === location.selectedState,
  );

  const countries = countriesStatesAndLocalGovt.map(country => {
    return {label: country.country, value: country.country};
  });

  const states =
    selectedCountryData?.states.map(state => {
      return {
        label: state.state,
        value: state.state,
      };
    }) || [];

  const localGovts =
    selectedStateData?.localGovt.map(localGovt => {
      return {
        label: localGovt,
        value: localGovt,
      };
    }) || [];

  const totalPages = 3;

  const onDismissSnackBar = () => setErrorMessage('');

  useEffect(() => {
    const userLoggedIn = isUserLoggedIn(userState.userProfile?.name);

    if (userLoggedIn) {
      navigation.navigate('ProfileScreen');
    }
  }, [navigation, userState.userProfile?.name]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {currentPage === 1 && (
        <View>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <TextInputWithIcon
            label="First Name"
            value={basicInfo.firstName}
            onChangeText={text => setBasicInfo({...basicInfo, firstName: text})}
            icon="account"
          />
          <TextInputWithIcon
            label="Last Name"
            value={basicInfo.lastName}
            onChangeText={text => setBasicInfo({...basicInfo, lastName: text})}
            icon="account"
          />
          <SingleDatePickerInput
            icon="calendar"
            title="Date of Birth"
            date={basicInfo.dateOfBirth}
            setDate={text =>
              setBasicInfo({
                ...basicInfo,
                dateOfBirth: text as Date,
              })
            }
          />
        </View>
      )}

      {currentPage === 2 && (
        <View>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <CustomDropdown
            placeholder="Select Country"
            options={countries}
            selectedValue={location.selectedCountry}
            setSelectedValue={value =>
              setLocation({...location, selectedCountry: value})
            }
          />
          <CustomDropdown
            disabled={!location.selectedCountry}
            placeholder="Select State"
            options={states}
            selectedValue={location.selectedState}
            setSelectedValue={value =>
              setLocation({...location, selectedState: value})
            }
          />
          <CustomDropdown
            disabled={!location.selectedState}
            placeholder="Select Locality"
            options={localGovts}
            selectedValue={location.selectedLocalGovt}
            setSelectedValue={value =>
              setLocation({...location, selectedLocalGovt: value})
            }
          />
          <PhoneNumberInput
            disabled={!location.selectedCountry}
            icon="phone"
            label="Phone"
            phoneNumber={location.phoneNumber}
            countryCode={selectedCountryData?.countryPhoneCode || '+234'}
            onChangePhoneNumber={text =>
              setLocation({...location, phoneNumber: text})
            }
          />
          <TextInputWithIcon
            icon="map-marker"
            label="Address"
            value={location.address}
            onChangeText={text => setLocation({...location, address: text})}
          />
          <TextInputWithIcon
            icon="location-enter"
            label="Zip Code"
            value={location.postalCode}
            onChangeText={text => setLocation({...location, postalCode: text})}
          />
        </View>
      )}

      {currentPage === 3 && (
        <View>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <TextInputWithIcon
            icon="account"
            label="Username or Display Name"
            value={profileInfo.username}
            onChangeText={text =>
              setProfileInfo({...profileInfo, username: text})
            }
          />
          <TextInputWithIcon
            icon="email"
            label="Email Address"
            value={profileInfo.email}
            onChangeText={text => setProfileInfo({...profileInfo, email: text})}
          />
          <TextInputWithIcon
            icon={isPasswordVisible ? 'eye-off' : 'eye'}
            label="Password"
            secureTextEntry={!isPasswordVisible}
            value={profileInfo.password}
            onChangeText={text =>
              setProfileInfo({...profileInfo, password: text})
            }
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          />
          <TextInputWithIcon
            icon="eye-off"
            label="Confirm Password"
            secureTextEntry={true}
            value={profileInfo.confirmPassword}
            onChangeText={text =>
              setProfileInfo({...profileInfo, confirmPassword: text})
            }
          />
        </View>
      )}

      <View style={styles.buttonContainer}>
        {currentPage > 1 && (
          <Button mode="contained" onPress={handlePrevious}>
            Previous
          </Button>
        )}
        {currentPage < totalPages && (
          <Button mode="contained" onPress={handleNext}>
            Next
          </Button>
        )}

        {currentPage === totalPages && (
          <Button mode="contained" onPress={handleFormSubmission}>
            Register
          </Button>
        )}
      </View>
      <View>
        <Snackbar
          visible={errorMessage ? true : false}
          onDismiss={onDismissSnackBar}
          duration={3000}
          theme={{colors: {accent: 'red'}}}
          action={{
            label: 'Ok',
            onPress: () => {
              onDismissSnackBar();
            },
          }}>
          {errorMessage}
        </Snackbar>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
