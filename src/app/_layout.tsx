import { router, Slot, Stack, Tabs, useSegments, useRouter } from 'expo-router';
import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'
import { useEffect } from 'react';

import "../styles/global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key)
      if (item) {
        console.log(`${key} was used 🔐 \n`)
      } else {
        console.log('No values stored under key: ' + key)
      }
      return item
    } catch (error) {
      console.error('SecureStore get item error: ', error)
      await SecureStore.deleteItemAsync(key)
      return null
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (err) {
      return
    }
  },
}

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

const InitialLayout = () => {
  const {isLoaded, isSignedIn} = useAuth();
  const router = useRouter();
  const segments = useSegments();

  const inTabsGroup = segments[0] === 'auth';

  useEffect(() => {
    if(isSignedIn && !inTabsGroup){
      router.replace('/(tabs)/home')
    }
    else if (!isSignedIn){
      router.replace('/auth/login')
    }
   }, [isSignedIn]);
  return <Slot/>;
};

const RootNavigation = () =>{
  
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <InitialLayout/>
          
      </ClerkLoaded>
    </ClerkProvider>
  )
}

export default RootNavigation;
