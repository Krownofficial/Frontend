import {  View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import ThemedButton from "react-native-really-awesome-button";
import FormsCreateEvent from "../../components/Forms/FormsCreateEvent";

export default function AddEvent() {
  const [selectedImage, setselectedImage] = useState<string | null>(null);
  

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setselectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#101010" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 100,
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-gold mt-4 text-[30px]">Create Event</Text>
        <View style={{ alignItems: "center", marginBottom: 24, marginTop: 24 }}>
          <TouchableOpacity onPress={handleImageSelection} activeOpacity={0.6}>
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={styles.eventImage}
              />
            ) : (
              <View
                style={[
                  styles.eventImage,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text style={{ color: "#f0f0f0" }}>Add photo</Text>
              </View>
            )}
            <View style={styles.cameraIcon}>
              <MaterialIcons name="photo-camera" size={26} color="#C1A875" />
            </View>
          </TouchableOpacity>
        </View>
        
        <View className='absolute h-[2px] w-[200%] bg-gold ml-[450px] mt-[400px] rotate-[20deg] '></View>
        <View className='absolute h-[2px] w-[200%] bg-gold  mt-[330px] rotate-[160deg]'></View>
        <View className='absolute h-[2px] w-[90%] bg-gold  mt-[500px] rotate-[120deg]'></View>
        
        <FormsCreateEvent />
        
        <View className="mt-[68px]">
          <ThemedButton name="AddLocation" type="primary" backgroundColor="#C1A875" backgroundDarker="#101010"
          textColor="#101010" >
            Add Location
          </ThemedButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#101010",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#C1A875",
  },
  cameraIcon: {
    position: "absolute",
    bottom: -3,
    right: -3,
    zIndex: 9999,
  },

  
});
