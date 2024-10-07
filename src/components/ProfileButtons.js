import React from 'react';
import { Text, TouchableOpacity, View , StyleSheet} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {Link} from 'expo-router';
import { Divider } from 'react-native-elements';

const ProfileButtons = ({name, icon}) => {

  
  let link = '';

  if(name === 'Edit Profile') {
    link = '/profile/editProfile';
  }

  else if(name === 'Settings') {
    link = '/profile/settings';
  }

  else if(name === 'Favorites') {
    link = '/profile/favorites';
  }


    return (
        <View className='flex flex-row items-center'>
        
        <Link href={link} asChild>
            <TouchableOpacity style={styles.button} activeOpacity={0.6}>
              <Ionicons name={icon} size={24} style={styles.icon} />
              <Text style={styles.buttonText}>{name}</Text>
              <Ionicons name="chevron-forward-outline" size={20} style={styles.arrowIcon}/>
            </TouchableOpacity>
          </Link>
  
        <View className='flex-1'>
          <Divider className='bg-blacksecondary w-[88%] h-0.5 mt-4' />
        </View>
        </View>

    )
}


export default ProfileButtons;

const styles = StyleSheet.create({
button: {
    flexDirection: 'row',
    width: "100%",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
  icon: {
    marginLeft: 20,
    marginRight: 25,
    color: "#101010"
  },
  buttonText: {
    flex: 1,
    color: '#101010',
    fontSize: 17,
    fontWeight: "500",
    textAlign: 'left',
  },
  arrowIcon: {
    marginLeft: 'auto',
    marginRight: 20,
    color: "#101010"
  },
})