import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const TabLayout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: '#C1A875',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 85,
          backgroundColor: '#101010',
          borderWidth: 2,  
          borderColor: "#C1A875",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow : 'hidden',
          borderBottomWidth: 0,
          borderTopWidth: 2, 
        },
        tabBarIconStyle: {
          marginTop: 12,
        },
        }}>
        <Tabs.Screen name='home' 
        options={{
          headerStatusBarHeight: 2, 
          headerTitle: "",  
          tabBarLabel: '', 
          headerStyle: { backgroundColor: '#101010', borderBottomWidth: 0, elevation: 0, shadowOpacity: 0},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={26} color={color} />
          ),
        }}/>

        <Tabs.Screen name='feed' 
        options={{
          headerStatusBarHeight: 2, 
          headerTitle: "", 
          tabBarLabel: '', 
          headerStyle: { backgroundColor: '#101010', borderBottomWidth: 0, elevation: 0, shadowOpacity: 0},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={30} color={color} />
          ),
        }}/>

        <Tabs.Screen name='addEvent' 
        options={{
          headerShown: false,
          headerStatusBarHeight: 2, 
          headerTitle: "", 
          tabBarLabel: '', 
          headerStyle: { backgroundColor: '#101010', borderBottomWidth: 0, elevation: 0, shadowOpacity: 0},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={30.5} />
          ),
        }}/>
        
        <Tabs.Screen name='profile' 
        options={{
          headerShown: false,
          headerStatusBarHeight: 2, 
          headerTitle: "", 
          tabBarLabel: '',
          headerStyle: { backgroundColor: '#101010', borderBottomWidth: 0, elevation: 0, shadowOpacity: 0},
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={30} />
          ),
        }}/>

    </Tabs>
  );
};

export default TabLayout;
