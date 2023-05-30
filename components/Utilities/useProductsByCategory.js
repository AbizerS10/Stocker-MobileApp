import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PRODUCTS_LOADING } from "../../store/types/CommonTypes";
import { path } from "../../path";

const useProductsByCategory = (category) => {
  const { newProductLoading } = useSelector((state) => state.CommonReducer);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch({ type: PRODUCTS_LOADING, payload: true });
    try {
      const response = await axios.get(`${path}/category/${category}`);
      setProducts(response.data.products);
    } catch (error) {
      setError(error);
    }
    dispatch({ type: PRODUCTS_LOADING, payload: false });
  };

  useEffect(() => {
    if (!newProductLoading) {
      fetchProducts();
    }
  }, [newProductLoading]);

  return { products, error, setProducts };
};

export default useProductsByCategory;
