import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Path, Rect, Svg } from "react-native-svg";
import SelectDropdown from "react-native-select-dropdown";
import { types } from "../types";
import axios from "axios";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NEWPRODUCT_LOADING } from "../../store/types/CommonTypes";
import { path } from "../../path";

const AddProduct = () => {
  const [modal, setModal] = useState(false);
  const { newProductLoading } = useSelector((state) => state.CommonReducer);
  const dispatch = useDispatch();

  const init = {
    company: "",
    category: "",
    type: "",
    article: "",
    color: "",
    sizeFrom: 0,
    sizeTo: 0,
    sizes: {},
    costPrice: "",
    sellingPrice: "",
  };

  const [product, setProduct] = useState(init);

  const {
    article,
    color,
    company,
    costPrice,
    sellingPrice,
    sizeFrom,
    sizeTo,
    sizes,
  } = product;

  const handleChange = (name, value) => {
    setProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //add a new product
  const addProduct = async () => {
    dispatch({ type: NEWPRODUCT_LOADING, payload: true });
    try {
      const config = {
        host: `${path}`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
        },
      };
      const res = await axios.post(`${path}/add`, product, config);
      setProduct(init);
      setModal(false);
    } catch (error) {
      Alert.alert(error);
    }
    dispatch({ type: NEWPRODUCT_LOADING, payload: false });
  };

  return (
    <View
      style={{ flex: 1 }}
      className="flex justify-center items-center bg-dark bottom-5"
    >
      {/* ---tab icon--- */}
      <TouchableOpacity onPress={() => setModal(true)}>
        <Svg
          width="59"
          height="58"
          viewBox="0 0 59 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Rect x="0.263062" width="58" height="58" rx="29" fill="#008080" />
          <Path
            d="M29.2631 9C18.2147 9 9.26306 17.9516 9.26306 29C9.26306 40.0484 18.2147 49 29.2631 49C40.3114 49 49.2631 40.0484 49.2631 29C49.2631 17.9516 40.3114 9 29.2631 9ZM40.876 31.2581C40.876 31.7903 40.4405 32.2258 39.9082 32.2258H32.4889V39.6452C32.4889 40.1774 32.0534 40.6129 31.5211 40.6129H27.005C26.4727 40.6129 26.0373 40.1774 26.0373 39.6452V32.2258H18.6179C18.0856 32.2258 17.6502 31.7903 17.6502 31.2581V26.7419C17.6502 26.2097 18.0856 25.7742 18.6179 25.7742H26.0373V18.3548C26.0373 17.8226 26.4727 17.3871 27.005 17.3871H31.5211C32.0534 17.3871 32.4889 17.8226 32.4889 18.3548V25.7742H39.9082C40.4405 25.7742 40.876 26.2097 40.876 26.7419V31.2581Z"
            fill="white"
          />
        </Svg>
      </TouchableOpacity>
      <Modal
        visible={modal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModal(false)}
      >
        {/* back drop*/}
        <View className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-50"></View>
        {/* main modal-- */}
        <View style={{ flex: 1 }} className="flex justify-center items-center">
          <View className="text-white w-[90%] bg-white p-3 rounded-md">
            <Text className="text-xl font-bold text-[#008080] mb-5">
              Add a Product
            </Text>
            <View className="flex justify-between items-center gap-y-2">
              <View className="flex flex-row justify-between items-center w-[100%]">
                <View className="w-[49%]">
                  <Text className="text-sm">Company Name</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    multiline={true}
                    onChangeText={(text) => handleChange("company", text)}
                    value={company}
                  />
                </View>
                <View className="w-[49%]">
                  <Text className="text-sm">Category</Text>
                  <SelectDropdown
                    data={["Men", "Women", "Kids"]}
                    onSelect={(item) =>
                      setProduct((prev) => {
                        return { ...prev, category: item };
                      })
                    }
                    defaultButtonText="Select a category"
                    buttonStyle={{
                      width: "100%",
                      height: 30,
                      borderWidth: 1,
                      borderColor: "#525252",
                      borderRadius: 6,
                      paddingHorizontal: 4,
                      backgroundColor: "slate",
                    }}
                    buttonTextStyle={{
                      fontSize: 15,
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                    rowTextStyle={{ fontSize: 15, fontWeight: "400" }}
                  />
                </View>
              </View>
              <View className="flex flex-row justify-between items-center w-[100%]">
                <View className="w-[49%]">
                  <Text className="text-sm">Type</Text>
                  <SelectDropdown
                    data={types}
                    onSelect={(item) =>
                      setProduct((prev) => {
                        return { ...prev, type: item };
                      })
                    }
                    defaultButtonText="Select a type"
                    buttonStyle={{
                      width: "100%",
                      height: 30,
                      borderWidth: 1,
                      borderColor: "#525252",
                      borderRadius: 6,
                      paddingHorizontal: 4,
                      backgroundColor: "slate",
                    }}
                    buttonTextStyle={{
                      fontSize: 15,
                      fontWeight: "400",
                      textAlign: "left",
                    }}
                    rowTextStyle={{ fontSize: 15, fontWeight: "400" }}
                  />
                </View>
                <View className="w-[49%]">
                  <Text className="text-sm">Article</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    multiline={true}
                    onChangeText={(text) => handleChange("article", text)}
                    value={article}
                  />
                </View>
              </View>
              <View className="flex flex-row justify-between items-center w-[100%]">
                <View className="w-[49%]">
                  <Text className="text-sm">Color</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    multiline={true}
                    onChangeText={(text) => handleChange("color", text)}
                    value={color}
                  />
                </View>
                <View className="w-[24%]">
                  <Text className="text-sm">Size from</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    multiline={true}
                    onChangeText={(text) => {
                      handleChange("sizeFrom", parseInt(text));
                    }}
                    value={sizeFrom}
                    keyboardType="numeric"
                  />
                </View>
                <View className="w-[24%]">
                  <Text className="text-sm">Size to</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    multiline={true}
                    onChangeText={(text) => {
                      handleChange("sizeTo", parseInt(text));
                    }}
                    value={sizeTo}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View className="w-[100%] flex flex-row justify-between items-center">
                {sizeTo > sizeFrom &&
                  new Array(sizeTo - sizeFrom + 1).fill(0).map((val, idx) => {
                    let label = sizeFrom + idx;
                    return (
                      <View className="flex gap-y-1 items-center" key={idx}>
                        <Text className="text-sm">{label}</Text>
                        <TextInput
                          className="w-6 border-1 border-[#525252] rounded-md px-1"
                          onChangeText={(text) =>
                            setProduct((prev) => {
                              return {
                                ...prev,
                                sizes: {
                                  ...prev.sizes,
                                  [label]: text,
                                },
                              };
                            })
                          }
                          value={sizes[label]}
                          keyboardType="number-pad"
                        />
                      </View>
                    );
                  })}
              </View>

              <View className="flex flex-row justify-between items-center w-[100%]">
                <View className="w-[49%]">
                  <Text className="text-sm">Cost Price</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    onChangeText={(text) => handleChange("costPrice", text)}
                    value={costPrice}
                    keyboardType="number-pad"
                  />
                </View>
                <View className="w-[49%]">
                  <Text className="text-sm">Selling Price</Text>
                  <TextInput
                    className="w-[100%] border-1 border-[#525252] rounded-md px-1"
                    onChangeText={(text) => handleChange("sellingPrice", text)}
                    value={sellingPrice}
                    keyboardType="number-pad"
                  />
                </View>
              </View>
            </View>
            <View className="w-[100%] mt-5 flex flex-row gap-x-3 items-center justify-center">
              <TouchableOpacity
                onPress={() => {
                  setProduct(init);
                  setModal(false);
                }}
                className="px-4 py-1 bg-[teal] rounded-full"
              >
                <Text className="text-white text-lg">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={addProduct}
                className="px-4 py-1 bg-[teal] rounded-full"
              >
                <Text className="text-white text-lg">
                  {newProductLoading ? "Wait..." : "Add"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddProduct;
