import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'

export default function Security() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{ headerTitle: "Security", headerStyle: { backgroundColor: '#181818'},  headerTintColor: '#f0f0f0',  headerBackTitleVisible: false, }}/>
      <Text>Here you can change your profile security settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  });