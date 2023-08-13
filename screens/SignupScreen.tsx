import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Dropdown from '../components/Dropdown';
import PhoneNumberInput from '../components/PhoneNumberInput';
import SingleDatePickerInput from '../components/SingleDatePickerInput';
import TextInputWithIcon from '../components/TextInputWithIcon';
import {countriesStatesAndLocalGovt} from '../util/countries';

const SignUpScreen: React.FC = () => {
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
    profession: string;
    selectedState: string;
    selectedLocalGovt: string;
    address: string;
    postalCode: string;
    phoneNumber: string;
  }>({
    selectedCountry: '',
    profession: '',
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

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const selectedCountryData = countriesStatesAndLocalGovt.find(
    country => country.country === location.selectedCountry,
  );

  const selectedStateData = selectedCountryData?.states.find(
    state => state.state === location.selectedState,
  );

  const countries = countriesStatesAndLocalGovt.map(country => country.country);
  const states = selectedCountryData?.states.map(state => state.state) || [];
  const localGovts = selectedStateData?.localGovt || [];

  const totalPages = 3;
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
          <Dropdown
            label="Country"
            options={countries}
            selectedValue={location.selectedCountry}
            onSelect={text => setLocation({...location, selectedCountry: text})}
          />
          <Dropdown
            disabled={!location.selectedCountry}
            label="State"
            options={states}
            selectedValue={location.selectedState}
            onSelect={text => setLocation({...location, selectedState: text})}
          />
          <Dropdown
            disabled={!location.selectedState}
            label="Locality"
            options={localGovts}
            selectedValue={location.selectedLocalGovt}
            onSelect={text =>
              setLocation({...location, selectedLocalGovt: text})
            }
          />
          <PhoneNumberInput
            disabled={!location.selectedCountry}
            label="Phone"
            phoneNumber={location.phoneNumber}
            countryCode={selectedCountryData?.countryPhoneCode || '+234'}
            onChangePhoneNumber={text =>
              setLocation({...location, phoneNumber: text})
            }
            icon="phone"
          />
          <TextInputWithIcon
            label="Address"
            value={location.address}
            onChangeText={text => setLocation({...location, address: text})}
            icon="map-marker"
          />
          <TextInputWithIcon
            label="Zip Code"
            value={location.postalCode}
            onChangeText={text => setLocation({...location, postalCode: text})}
            icon="location-enter"
          />
        </View>
      )}

      {currentPage === 3 && (
        <View>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <TextInputWithIcon
            label="Username or Display Name"
            value={profileInfo.username}
            onChangeText={text =>
              setProfileInfo({...profileInfo, username: text})
            }
            icon="account"
          />
          <TextInputWithIcon
            label="Email Address"
            value={profileInfo.email}
            onChangeText={text => setProfileInfo({...profileInfo, email: text})}
            icon="email"
          />
          <TextInputWithIcon
            label="Password"
            secureTextEntry={!isPasswordVisible}
            value={profileInfo.password}
            onChangeText={text =>
              setProfileInfo({...profileInfo, password: text})
            }
            icon={isPasswordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          />
          <TextInputWithIcon
            label="Confirm Password"
            secureTextEntry={true}
            value={profileInfo.confirmPassword}
            onChangeText={text =>
              setProfileInfo({...profileInfo, confirmPassword: text})
            }
            icon="eye-off"
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

        {currentPage === totalPages && <Button mode="contained">Submit</Button>}
      </View>
    </ScrollView>
  );
};

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

export default SignUpScreen;
