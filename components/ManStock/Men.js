import { View, Text, Alert } from "react-native";
import React from "react";
import SearchBar from "../Utilities/SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "../Utilities/Table";
import useProductsByCategory from "../Utilities/useProductsByCategory";

const Men = () => {
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, error } = useProductsByCategory("Men");
  const { productsLoading } = useSelector((state) => state.CommonReducer);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setFilteredProducts(products.filter((prod) => prod.article === filter));
  }, [filter]);

  return (
    <View className="flex items-center gap-y-5 p-5">
      <SearchBar text={filter} setText={setFilter} />
      {productsLoading ? (
        <Text className="text-2xl font-bold text-center w-[100%]">
          Loading...
        </Text>
      ) : filteredProducts.length === 0 ? (
        <Text className="text-2xl font-bold text-center w-[100%]">
          No Products Found
        </Text>
      ) : (
        <Table data={filteredProducts} />
      )}
    </View>
  );
};

export default Men;
