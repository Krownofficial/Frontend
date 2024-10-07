import Slider from '@/src/components/Slider';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'

export default function Pricing() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ 
          headerTitle: "", 
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
        <View>
          <Slider/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#101010"
    },
  });