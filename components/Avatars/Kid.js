import { View, Text, Image } from "react-native";
import React from "react";

const Kid = () => {
  return (
    <Image
      style={{ height: 40, width: 40 }}
      source={require("../../assets/kid.jpg")}
    />
  );
};

export default Kid;
