import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../Utilities/SearchBar";
import { useSelector } from "react-redux";
import Table from "../Utilities/Table";
import useProductsByCategory from "../Utilities/useProductsByCategory";

const Men = () => {
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { products, error, setProducts } = useProductsByCategory("Men");
  const { productsLoading } = useSelector((state) => state.CommonReducer);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((prod) => prod.article.includes(filter))
    );
  }, [filter]);

  return (
    <View className="flex items-center gap-y-5 py-5 px-2">
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
        <Table data={filteredProducts} setData={setProducts} />
      )}
    </View>
  );
};

export default Men;
