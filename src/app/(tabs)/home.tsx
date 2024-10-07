import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { StyleSheet, View, TextInput, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Stack } from "expo-router";

import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
  const [markerPosition, setMarkerPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });

  const handleMapPress = (e: MapPressEvent) => {
    const { coordinate } = e.nativeEvent;
    setMarkerPosition(coordinate);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView />
      <SearchBar />

      <MapView style={styles.map} onPress={handleMapPress}>
        <Marker coordinate={markerPosition} title="evento" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
