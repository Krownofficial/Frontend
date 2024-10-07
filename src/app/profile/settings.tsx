import { Stack, useRouter, Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Animated, Easing } from 'react-native';
import { useState, useRef } from 'react';

import { useAuth } from '@clerk/clerk-expo';


import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const settings = () =>{
  const router = useRouter();

  const { signOut } = useAuth();

  const doLogout = async () => {
    signOut();
  };

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{ 
        headerTitle: "Settings", 
        headerStyle: { 
          backgroundColor: '#101010', 
        }, 
        headerTintColor: '#f0f0f0',  
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={{marginLeft: 0}} activeOpacity={0.6}>
            <Ionicons name="chevron-back" size={28} color="#f0f0f0" />
          </TouchableOpacity>
        )
      }}/>
      
      <ScrollView style= {{backgroundColor: "#101010"}}>
        {/*personalization*/}
        <View className="mt-5" style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Personalization</Text>
          <View>
            
            <TouchableOpacity style={styles.button} activeOpacity={0.4}>
              <MaterialCommunityIcons name="theme-light-dark" size={25} color="#C1A875" style={[styles.icon, {marginRight: 19}]}/>  
              <Text style={styles.buttonText}>Dark/light mode</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
            </TouchableOpacity>

            <View style={styles.subDivider} />
            
            <Link href="settings/notifications" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <Ionicons name="language" size={24} color="#C1A875" style={styles.icon}/> 
                <Text style={styles.buttonText}>Language</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />

            <Link href="settings/notifications" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <Ionicons name="accessibility" size={24} color="#C1A875" style={styles.icon}/> 
                <Text style={styles.buttonText}>Accessibility</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Account settings*/}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View>

            <Link href="/settings/pricing" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
              <MaterialIcons name="payment" size={24} color="#C1A875" style={styles.icon} />  
                <Text style={styles.buttonText}>My Subscription</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />
            
            <Link href="settings/notifications" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <Ionicons name="notifications" size={24} color="#C1A875" style={styles.icon}/> 
                <Text style={styles.buttonText}>Notifications</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />

            <Link href="settings/privacy" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <MaterialIcons name="phone-android" size={25} color="#C1A875" style={[styles.icon, {marginRight: 19}]} /> 
                <Text style={styles.buttonText}>Device permissions</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />
            
            <Link href="settings/privacy" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <MaterialIcons name="privacy-tip" size={24} color="#C1A875" style={styles.icon} /> 
                <Text style={styles.buttonText}>Privacy</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />

            <Link href="/settings/security" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <MaterialIcons name="security" size={24} color="#C1A875" style={styles.icon} />  
                <Text style={styles.buttonText}>Security</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.divider} />

        {/*Support & About settings*/}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Support & About</Text>
          <View>
            
            <Link href="settings/notifications" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <MaterialIcons name="help" size={25} color="#C1A875" style={[styles.icon, {marginRight: 18}]} />
                <Text style={styles.buttonText}>Help & Support</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />
            
            <Link href="settings/privacy" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <MaterialIcons name="info" size={26} color="#C1A875" style={[styles.icon, {marginRight: 18}]} />
                <Text style={styles.buttonText}>Terms and conditions</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={styles.divider} />

        {/*Actions settings*/}
        <View style={[styles.sectionContainer, {paddingBottom: 70}]}>
          <Text style={styles.sectionTitle}>Actions</Text>
          <View>
            
            <Link href="/settings/security" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4}>
                <Ionicons name="flag" size={23} color="#C1A875" style={[styles.icon, {marginRight: 20.6}]}/> 
                <Text style={styles.buttonText}>Report a problem</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="gray" style={styles.arrowIcon}/>
              </TouchableOpacity>
            </Link>

            <View style={styles.subDivider} />
            
            <Link href="auth/login" asChild>
              <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={doLogout}>
                <Ionicons name="log-out" size={27} color="#C1A875" style={[styles.icon, {marginRight: 17}]}/> 
                <Text style={[styles.buttonText, {color: "red", fontWeight: "bold"}]}>Log out</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView> 
    </View>
  )
}

export default settings;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingVertical: 4,
    paddingTop: 15
  },
  divider: {
    height: 4,
    backgroundColor: "#292929",
  },
  subDivider: {
    height: 1,
    backgroundColor: "#292929",
    marginLeft: 58
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#f0f0f0",
    marginBottom: 10,
    marginLeft: 20
  },
  button: {
    flexDirection: 'row',
    alignItems: "center",
    paddingVertical: 20,
  },
  icon: {
    marginRight: 20,
    marginLeft: 20
  },
  buttonText: {
    flex: 1,
    fontSize: 17,
    color: "#f0f0f0",
    textAlign: 'left',
  },
  arrowIcon: {
    marginLeft: 'auto',
    marginRight: 20
  },
});
