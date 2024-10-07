import { Stack, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useState } from 'react';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons, Ionicons} from '@expo/vector-icons';

import { useUser} from '@clerk/clerk-expo';


const editProfile = () => {

  const router = useRouter();
  const {user} = useUser();
  const [selectedImage, setselectedImage] = useState<string | null>(null);
  const [username, setName] = useState(user?.username);
  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState("");


  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16,9],
      quality: 1,
    });

    if(!result.canceled) {
      setselectedImage(result.assets[0].uri)
    }
  };

  const OnSaveUser = async () => {
    try {
      const result = await user?.update({
        username: username!,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: "#101010"}}>
      <Stack.Screen options={{ 
        headerTitle: "Edit Profile", 
        headerStyle: { 
          backgroundColor: '#101010'
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
      <KeyboardAwareScrollView 
        contentContainerStyle={styles.contentContainer}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled
        extraScrollHeight={80} 
        >

        <View style={{alignItems: "center", marginBottom: 26}}>
          <TouchableOpacity onPress={handleImageSelection} activeOpacity={0.6} >
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.profileImage} />
              ) : (
                
                <Image source={require("../../assets/images/unknown_user.png")} style={[styles.profileImage, {borderWidth: 0}]} />
              )
            }       
            <View style={styles.cameraIcon}>
              <MaterialIcons name='photo-camera' size={26} color="#C1A875"/>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Name</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              value={username || ""}
              onChangeText={setName}
              editable={true}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Email</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              value={email}
              onChangeText={value=>setEmail(value)}
              editable={true}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.title}>Password</Text>
          <View style={[styles.textInputContainer, {flexDirection: 'row', alignItems: "center"}]}>
            <TextInput
            style={[styles.textInput,{flex: 1}]}
              value={password}
              onChangeText={value=>setPassword(value)}
              editable={true}
              secureTextEntry={!showPassword}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} 
              activeOpacity={0.8}
              style={styles.iconContainer}>
              <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={24} color="#C1A875" />
          </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.SaveChangesButton} activeOpacity={0.8} onPress={OnSaveUser}>
          <Text style={styles.buttonText}>Save changes</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  )
};

export default editProfile;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#101010",
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 85, 
    borderWidth: 3,
    borderColor: "#C1A875",
  },
  cameraIcon: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    zIndex: 9999,
  },
  sectionContainer: {
    flexDirection: "column", 
    width: '89%',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C1A875"
  },
  textInputContainer: {
    height: 48,
    width: "100%",
    borderColor: "#C1A875",
    borderWidth: 3,
    borderRadius: 12,
    marginVertical: 6,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0"
  },
  textInput: {
    fontSize: 15
  },
  iconContainer: {
    marginLeft: "auto",
  },
  SaveChangesButton: {
    height: 54,
    width: '60%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
    marginBottom: 55, 
    backgroundColor: "#C1A875",
    borderRadius: 85,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#f0f0f0"
  }
});