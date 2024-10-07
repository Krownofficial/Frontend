import { Stack} from 'expo-router';

export default function authlayout() {
  return (   
    <Stack>   
        <Stack.Screen
        name="login"
        options={{headerShown:false}}>
        </Stack.Screen>
        <Stack.Screen
        name="reset"
        options={{headerShown:false}}>
        </Stack.Screen>
        <Stack.Screen
        name="sign-up"
        options={{headerShown:false}}>
        </Stack.Screen>
    </Stack>  
  );
}