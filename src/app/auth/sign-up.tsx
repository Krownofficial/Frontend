import { ImageBackground, StyleSheet, View , Text, Image, TextInput, TouchableOpacity, Button} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, Stack, useRouter } from "expo-router";
import * as React from 'react'
import { useSignUp, useUser } from '@clerk/clerk-expo'

import  ThemedButton  from "react-native-really-awesome-button";
import TextInputAuth from "../../components/TextInputAuth.js";


const Signup = () => {
    
    const {isLoaded, signUp, setActive } = useSignUp()
    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [metadata] = 'normal';
    const [pendingVerification, setPendingVerification] = React.useState(false)
    const [code, setCode] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { user } = useUser()
    const router = useRouter()

    const onSignUpPress = async () => {
        if (!isLoaded) {
          return
        }

        setLoading(true);
    
        try {
          const response = await signUp.create({
            emailAddress,
            password,
            username,
            unsafeMetadata: {
              role: "normal",
            },
          })

          console.log(response)
    
          await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
    
          setPendingVerification(true)

        } catch (err: any) {
            alert(err.errors[0].message)
        } finally {
          setLoading(false);
        }
    }
    
      const onPressVerify = async () => {
        if (!isLoaded) {
          return
        }
    
        try {
          const completeSignUp = await signUp.attemptEmailAddressVerification({
            code,
          })
    
          if (completeSignUp.status === 'complete') {
            await setActive({ session: completeSignUp.createdSessionId })
            router.replace('/')

          } else {
            console.error(JSON.stringify(completeSignUp, null, 2))
          }
        } catch (err: any) {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error(JSON.stringify(err, null, 2))
        }
      }

    
    
  return (
    <ImageBackground source={require("../../assets/images/Frame2.png")} className="bg-blacksecondary">
    <SafeAreaView>
      <View>
        <Image source={require("../../assets/images/krown_logo.png")} className="mt-[5px] h-[50px] w-[50px] self-center" />
      </View>
      <View>
        <Text className="text-gold font-semibold text-[64px] ml-[30px] mt-[10px]">
          Sign
        </Text>
        <Text className="text-gold font-semibold text-[50px] ml-[30px] mt-[-10px]" >
          Up
        </Text>
      </View>
      {!pendingVerification && (
      <View className="items-center mt-[40px]">
      <TextInputAuth
       placeholder="Username" 
       value={username} 
       onChangeText={setUsername}
       secureTextEntry={false}/>

       <TextInputAuth
       placeholder="Password" 
       value={password} 
       onChangeText={setPassword}
       secureTextEntry={true}/>

       <TextInputAuth
       placeholder="Email" 
       value={emailAddress} 
       onChangeText={setEmailAddress}
       secureTextEntry={false}/>

    </View>
      )}
      {!pendingVerification && (
      <View>
        <ThemedButton
        activityColor="#FFFFF"
        backgroundActive = "#C1A875" 
        backgroundColor ="#C1A875"
        textColor="#000000"
        backgroundShadow ="#000000" borderColor= "#000000" backgroundDarker="#000000" width={150} height={50}
        paddingHorizontal={0}
        style={styles.Button}
        onPress={onSignUpPress}
       > Sign Up</ThemedButton>
      </View>
        )}
        
        {pendingVerification && (
        <>
          <TextInput value={code} placeholder="Code" onChangeText={(code) => setCode(code)} style={styles.code} />
          <ThemedButton onPress={onPressVerify} style={styles.Button2}
            activityColor="#FFFFF"
            backgroundActive = "#C1A875" 
            backgroundColor ="#C1A875"
            textColor="#000000"
            backgroundShadow ="#000000" borderColor= "#000000" backgroundDarker="#000000" width={150} height={50}
            paddingHorizontal={0}>Verify Email</ThemedButton>
        </>
      )}
        {!pendingVerification && (
        <View className="flex-row mt-[10px] justify-center">
        <Text className="text-white">Do you have account? </Text>
        <TouchableOpacity onPress={() => router.push("./login")}>
        <Text  className="text-black font-[800px]"> Login</Text>
        </TouchableOpacity>
        </View>
        )}
      <ImageBackground source={require("../../assets/images/people.png")} style={styles.people}/>
       
      </SafeAreaView>
      </ImageBackground>
  );
};

export default Signup

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the ImageBackground covers the whole screen
  },

  Text1 : {
    color: "#C1A875",
    fontWeight: "600",
    fontSize: 64,
    marginLeft: 30,
    marginTop: 10, 
  },

  Text2 : {
    color: "#C1A875",
    fontWeight: "600",
    fontSize: 50,
    marginLeft: 30,
    marginTop: -10,
  },

  icon:{
    width: 50,
    height: 50,
    marginTop: 5,  
    alignSelf: 'center',  
  },

  TextInput:{
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C1A875",
    marginLeft: 30,
    marginTop: 50,
    alignItems: "center",
    width: 300,
    elevation: 10,
    height: 40,
    paddingLeft: 15
  },

  TextInput2:{
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C1A875",
    marginLeft: 30,
    marginTop: 20,
    width: 300,
    elevation: 10,
    height: 40,
    paddingLeft: 15,
  },

  HaveAccount: {
    color: "#FFFF",
    textAlign: "right",
  },

  Button:{
    alignSelf: 'center',
  },

  people:{
    marginTop: 10,
    height: 240,
    resizeMode: 'contain',
    
  },

  link:{
    color: "black",
    fontWeight: "800",
     
  },

  container1:{
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",  
  },
  
  Button2:{
    marginTop: 70,
    alignSelf: 'center',
    marginBottom: 50,
  },

  code:{
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C1A875",
    marginLeft: 30,
    marginTop: 100,
    alignItems: "center",
    width: 300,
    elevation: 10,
    height: 40,
    paddingLeft: 15
  }
});