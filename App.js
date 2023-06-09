import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import StackNavigator from "./components/Navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import DataProvider from "./store/index";
import axios from "axios";

export default function App() {
  return (
    <TailwindProvider>
      <DataProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </DataProvider>
    </TailwindProvider>
  );
}
