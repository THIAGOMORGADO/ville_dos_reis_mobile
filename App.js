import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from './src/contexts/auth';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "react-native";

import Routes from "./src/routes";


export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
