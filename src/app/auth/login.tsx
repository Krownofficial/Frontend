import { ImageBackground, StyleSheet, View , Text, Image, TextInput} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from "expo-router";
import  ThemedButton  from "react-native-really-awesome-button";
import { useState } from "react";
import { useSignIn } from '@clerk/clerk-react';
import TextInputAuth from "../../components/TextInputAuth.js";

const login = () => {
const { signIn, setActive, isLoaded } = useSignIn();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);

const onSignInPress = async () => {

    if(!isLoaded){
        return;
    }   

    setLoading(true);

    try{
        const completeLogin = await signIn.create({
            identifier : username,
            password,
        });

        await setActive({ session: completeLogin.createdSessionId });
    }
    catch(err:any){
        alert(err.errors[0].message);
    }
    finally{
        setLoading(false);
    };
};
    



  return (
    <ImageBackground source={require("../../assets/images/Frame2.png")} className="bg-blacksecondary">
    <SafeAreaView>
      <View>
        <Image source={require("../../assets/images/krown_logo.png")}  className="mt-[5px] h-[50px] w-[50px] self-center"/>
      </View>
      <View>
        <Text className="text-gold font-semibold text-[64px] ml-[30px] mt-[10px]">
          Log
        </Text>
        <Text className="text-gold font-semibold text-[50px] ml-[30px] mt-[-10px]">
          In
        </Text>
      </View>

      <View className="items-center mt-[100px]">
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
      </View>

      <View>
        <ThemedButton
        activityColor="#FFFFF"
        backgroundActive = "#C1A875" 
        backgroundColor ="#C1A875"
        textColor="#000000"
        backgroundShadow ="#000000" borderColor= "#000000" backgroundDarker="#000000" width={150} height={50}
        paddingHorizontal={0}
        style={styles.Button}
        onPress={onSignInPress}
       > Log in</ThemedButton>
      </View>

      <View className="flex-row mt-[10px] justify-center">
      <Text className="text-white">Create one account </Text>
      <Link href={"./sign-up"} className="text-black font-[800px]">Sign up</Link>
      </View>
      <ImageBackground source={require("../../assets/images/people.png")} style={styles.people}/>
      </SafeAreaView>
      </ImageBackground>
  );

};

export default login;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensures the ImageBackground covers the whole screen
  },

  Text1 : {
    fontWeight: "600",
    fontSize: 64,
    marginLeft: 30,
    marginTop: 80, 
  },

  Text2 : {
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


  Button:{
    alignSelf: 'center',
  },

  people:{
    marginTop: 10,
    height: 240,
    resizeMode: 'contain',
  },
  

});