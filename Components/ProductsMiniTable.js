import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryRow from "./CategoryRow";
import ProductRow from "./ProductRow";
import { Products } from "../Data/Products";

function Table(enteredText, inStockOnly) {
  let allProducts = Products;
  const table = [];
  let currentCategory = "";

  allProducts.forEach((item) => {
    if (!item.name.toLowerCase().includes(enteredText.toLowerCase())) {
      return;
    }

    if (inStockOnly && !item.stocked) {
      return;
    }

    if (item.category !== currentCategory) {
      table.push(<CategoryRow category={item.category} key={Math.random()} />);
      currentCategory = item.category;
    }

    table.push(
      <ProductRow
        productName={item.name}
        productPrice={item.price}
        inStock={item.stocked}
        key={Math.random()}
      />
    );
  });

  return table;
}

const ProductsMiniTable = ({ enteredText, inStockOnly }) => {
  const productsTable = Table(enteredText, inStockOnly);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{productsTable}</View>
    </ScrollView>
  );
};

export default ProductsMiniTable;

const styles = StyleSheet.create({});
