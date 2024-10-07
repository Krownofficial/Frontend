import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 5000);
}