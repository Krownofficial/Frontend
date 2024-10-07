import { Stack, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Favourites() {
  const router = useRouter(); // Hook para navegação

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Favourites", headerStyle: { backgroundColor: '#181818'},  headerTintColor: '#f0f0f0',  headerBackTitleVisible: false, }}/>
      <Text>Here you can find all your favourite events</Text>
      <Button 
        title="Go to Home"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
