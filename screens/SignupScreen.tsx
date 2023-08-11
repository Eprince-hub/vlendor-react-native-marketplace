import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import SingleDatePickerInput from '../components/SingleDatePickerInput';
import TextInputWithIcon from '../components/TextInputWithIcon';

const SignUpScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [basicInfo, setBasicInfo] = useState<{
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
  }>({
    firstName: '',
    lastName: '',
    dateOfBirth: '' as unknown as Date,
  });

  const [profileInfo, setProfileInfo] = useState<{
    location: string;
    profession: string;
    // ... other profile info fields
  }>({
    location: '',
    profession: '',
  });

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const totalPages = 4;

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
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <TextInputWithIcon
            label="Location"
            value={profileInfo.location}
            onChangeText={text =>
              setProfileInfo({...profileInfo, location: text})
            }
            icon="map-marker"
          />
          <TextInputWithIcon
            label="Profession"
            value={profileInfo.profession}
            onChangeText={text =>
              setProfileInfo({...profileInfo, profession: text})
            }
            icon="briefcase"
          />
          {/* Add more profile info fields here */}
        </View>
      )}

      {currentPage === 3 && (
        <View>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <TextInputWithIcon
            label="Location"
            value={profileInfo.location}
            onChangeText={text =>
              setProfileInfo({...profileInfo, location: text})
            }
            icon="map-marker"
          />
          <TextInputWithIcon
            label="Profession"
            value={profileInfo.profession}
            onChangeText={text =>
              setProfileInfo({...profileInfo, profession: text})
            }
            icon="briefcase"
          />
          {/* Add more profile info fields here */}
        </View>
      )}

      {currentPage === 4 && (
        <View>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <TextInputWithIcon
            label="Location"
            value={profileInfo.location}
            onChangeText={text =>
              setProfileInfo({...profileInfo, location: text})
            }
            icon="map-marker"
          />
          <TextInputWithIcon
            label="Profession"
            value={profileInfo.profession}
            onChangeText={text =>
              setProfileInfo({...profileInfo, profession: text})
            }
            icon="briefcase"
          />
          {/* Add more profile info fields here */}
        </View>
      )}

      {/* Add more sections here */}

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
          <Button mode="contained" onPress={handleNext}>
            Submit
          </Button>
        )}
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
