import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Men from "../ManStock/Men";
import Kids from "../KidsStock/Kids";
import Women from "../WomenStock/Women";
import Male from "../Avatars/Male";
import Kid from "../Avatars/Kid";
import Female from "../Avatars/Female";
import AddProduct from "../Products/AddProduct";
import Icon from "react-native-vector-icons/MaterialIcons";
import AllProducts from "../Products/AllProducts";

const Tab = createBottomTabNavigator();

const Post = () => {
  return null;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          color: "green",
          backgroundColor: "white",
          paddingVertical: 5,
        },
        tabBarActiveTintColor: "#008080",
        inactiveColor: "grey",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Men"
        component={Men}
        options={{
          tabBarIcon: () => <Male />,
        }}
      />
      <Tab.Screen
        name="Women"
        component={Women}
        options={{
          tabBarIcon: () => <Female />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: "",
          tabBarButton: () => <AddProduct />,
        }}
      />
      <Tab.Screen
        name="Kids"
        component={Kids}
        options={{
          tabBarIcon: ({ focused }) => (
            <Kid color={focused ? "#008080" : "grey"} />
          ),
        }}
      />
      <Tab.Screen
        name="All"
        component={AllProducts}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="inventory" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
