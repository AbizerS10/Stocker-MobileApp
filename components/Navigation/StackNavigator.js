import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import Header from "../Header/Header";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: (props) => <Header {...props} />,
        statusBarColor: "#008080",
      }}
    >
      <Stack.Screen name="home" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
