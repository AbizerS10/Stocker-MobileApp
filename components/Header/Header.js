import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View className="flex flex-row gap-x-3 items-center bg-[teal] p-2">
      <Icon name="inventory" size={40} color={"white"} />
      <Text className="text-2xl font-bold text-white">Stocker</Text>
    </View>
  );
};

export default Header;
