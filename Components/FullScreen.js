import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import SearchBar from "./SearchBar";
import ProductsMiniTable from "./ProductsMiniTable";

const FullScreen = () => {
  const [enteredText, setEnteredText] = useState(""); // Apple Pumpkin
  const [inStockOnly, setInStockOnly] = useState(false); // true false

  function enteredTextHandler(value) {
    setEnteredText(value);
  }

  function inStockOnlyHandler(value) {
    setInStockOnly(value);
    console.log(value);
  }
  return (
    <View style={styles.container}>
      <SearchBar
        enteredTextHandler={enteredTextHandler}
        inStockOnlyHandler={inStockOnlyHandler}
        enteredText={enteredText}
        inStockOnly={inStockOnly}
      />
      <ProductsMiniTable enteredText={enteredText} inStockOnly={inStockOnly} />
    </View>
  );
};

export default FullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    justifyContent: "center",
  },
});
