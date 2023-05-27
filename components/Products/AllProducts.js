import { View, Text } from "react-native";
import React from "react";

const AllProducts = () => {
  return (
    <View style={{ flex: 1 }} className="px-2">
      <View className="w-[100%] flex flex-row justify-between items-center">
        <Text className="text-xl font-bold">AllProducts</Text>
      </View>
    </View>
  );
};

export default AllProducts;
