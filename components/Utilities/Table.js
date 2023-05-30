import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import React, { useEffect } from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { path } from "../../path";
import { PRODUCTS_LOADING } from "../../store/types/CommonTypes";
import axios from "axios";
import { useDispatch } from "react-redux";

const Table = ({ data, setData }) => {
  const [editable, setEditable] = useState(null);
  const [deleteProdId, setDeleteProdId] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = async () => {
    dispatch({ type: PRODUCTS_LOADING, payload: true });
    try {
      const config = {
        host: `${path}`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
        },
      };
      const res = await axios.put(
        `${path}/edit/${editable._id}`,
        { newProd: editable },
        config
      );
      setData((prev) =>
        prev.map((prod) =>
          prod._id === editable._id ? res.data.product : prod
        )
      );
      setEditable(null);
    } catch (error) {
      Alert.alert(error);
    }
    dispatch({ type: PRODUCTS_LOADING, payload: false });
  };

  const handleDelete = async () => {
    dispatch({ type: PRODUCTS_LOADING, payload: true });
    try {
      const config = {
        host: `${path}`,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${path}`,
        },
      };
      const res = await axios.delete(`${path}/delete/${deleteProdId}`, config);
      setData((prev) => prev.filter((prod) => prod._id !== deleteProdId));
    } catch (error) {
      Alert.alert(error);
    }
    dispatch({ type: PRODUCTS_LOADING, payload: false });
  };

  return (
    <View className="w-[100%] mt-5 border-[1px] border-[#B7B7B7] rounded-md ">
      <View className="w-[100%] flex flex-row divide-x-[1px] divide-[#B7B7B7] border-b-[1px] border-[#B7B7B7]">
        <Text className="basis-[10%] font-bold text-center">S.No</Text>
        <Text className="basis-[15%] font-bold text-center">Article</Text>
        <Text className="basis-[20%] font-bold text-center">Company</Text>
        <Text className="basis-[16%] font-bold text-center">Type</Text>
        <Text className="basis-[15%] font-bold text-center">Color</Text>
        <Text className="basis-[9%] font-bold text-center">C.P.</Text>
        <Text className="basis-[9%] font-bold text-center">S.P.</Text>
        <View className="basis-[6%] flex justify-center items-center">
          <EntypoIcon name="arrow-bold-down" size={20} />
        </View>
      </View>
      <View className="divide-y-[1px] divide-[#B7B7B7]">
        {data.map((row, idx) => {
          return (
            <View
              className="flex divide-y-[1px] divide-[#B7B7B7]"
              key={row._id}
            >
              <View className="w-[100%] flex flex-row divide-x-[1px] divide-[#B7B7B7]">
                <Text className={`basis-[10%] text-center`}>{idx + 1}</Text>
                <Text className={`basis-[15%] text-center`}>{row.article}</Text>
                <Text className={`basis-[20%] text-center`}>{row.company}</Text>
                <Text className={`basis-[16%] text-center`}>{row.type}</Text>
                <Text className={`basis-[15%] text-center`}>{row.color}</Text>
                <Text className={`basis-[9%] text-center`}>
                  {row.costPrice}
                </Text>
                <Text className={`basis-[9%] text-center`}>
                  {row.sellingPrice}
                </Text>
                <View
                  className={`basis-[6%] flex justify-center divide-y-[1px] divide-[#B7B7B7]`}
                >
                  {!editable ? (
                    <TouchableOpacity onPress={() => setEditable(row)}>
                      <MaterialIcon
                        name="circle-edit-outline"
                        size={20}
                        color={"#008080"}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={handleEdit}>
                      <IonIcon
                        name="checkmark-done"
                        size={20}
                        color={"#008080"}
                      />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={() => setDeleteProdId(row._id)}>
                    <MaterialIcon
                      name="delete-outline"
                      size={20}
                      color={"red"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                className={`w-[100%] px-2 py-1 flex flex-row justify-between items-center`}
              >
                {Object.keys(row.sizes).map((key) => {
                  return (
                    <View
                      className="flex flex-row items-center justify-between gap-x-[5px]"
                      key={key}
                    >
                      <Text className="font-bold">{key}:</Text>
                      {editable && editable._id === row._id ? (
                        <TextInput
                          className="w-6 h-6 border-1 border-[#525252] rounded-md px-1"
                          defaultValue={editable.sizes[key]}
                          onChangeText={(text) =>
                            setEditable((prev) => {
                              return {
                                ...prev,
                                sizes: { ...prev.sizes, [key]: text },
                              };
                            })
                          }
                          keyboardType="numeric"
                        />
                      ) : (
                        <Text>{row.sizes[key]}</Text>
                      )}
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
      <Modal
        visible={deleteProdId ? true : false}
        animationType="slide"
        onRequestClose={() => setDeleteProdId(null)}
        transparent={true}
      >
        <View style={{ flex: 1 }} className="flex justify-center items-center">
          <View className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-50"></View>
          <View className="w-[90%] rounded-md border-[1px] border-[#B7B7B7] p-5 bg-gray-200">
            <Text className="text-2xl font-bold">Confirm delete</Text>
            <View className="w-[100%] mt-5 flex flex-row justify-end">
              <View className="flex flex-row gap-x-3">
                <TouchableOpacity
                  className="px-2 py-1 bg-[teal] rounded-full"
                  onPress={handleDelete}
                >
                  <Text className="text-white text-[16px]">Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="px-2 py-1 bg-[teal] rounded-full"
                  onPress={() => setDeleteProdId(null)}
                >
                  <Text className="text-white text-[16px]">Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Table;
