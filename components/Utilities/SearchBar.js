import { View, Text, TextInput } from "react-native";
import React from "react";
import FeatherIcons from "react-native-vector-icons/Feather";

const SearchBar = ({ text, setText }) => {
  return (
    <View className="w-[100%] h-10 flex flex-row justify-between items-center border-[1px] border-solid border-black rounded-md px-2">
      <TextInput
        placeholder="Search by article"
        multiline={true}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <FeatherIcons name="search" color={"black"} size={20} />
    </View>
  );
};

export default SearchBar;
