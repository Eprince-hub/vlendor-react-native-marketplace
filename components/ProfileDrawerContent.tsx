import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import {renderMagnifyIcon} from './icons/MagnifyIcon';
import {renderProfileIcon} from './icons/ProfileIcon';
import {renderSettingsIcon} from './icons/SettingsIcon';

const ProfileDrawerContent = ({navigation}: any) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={require('../assets/avatar/fullStar.png')}
            size={50}
          />
          <Title style={styles.title}>User Name</Title>
          <Caption style={styles.caption}>user@example.com</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Search"
            icon={renderMagnifyIcon}
            onPress={() => navigation.navigate('Search')}
          />
          <DrawerItem
            label="Profile Info"
            icon={renderProfileIcon}
            onPress={() => navigation.navigate('ProfileScreen')}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <DrawerItem
            label="Settings"
            icon={renderSettingsIcon}
            onPress={() => navigation.navigate('Settings')}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
});

export default ProfileDrawerContent;
