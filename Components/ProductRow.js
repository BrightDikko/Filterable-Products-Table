import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";

const ProductRow = ({ productName, productPrice, inStock }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 20,
        marginVertical: 2,
        height: 45,
        backgroundColor: "lightgrey",
        alignItems: "center",
        borderColor: "black",
        borderWidth: "1",
        paddingLeft: 15,
        width: 350,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 250,
        }}
      >
        <Text style={{ fontSize: 20 }}>{productName}</Text>
        <Text style={{ fontSize: 20 }}>{productPrice}</Text>
      </View>
      {inStock && (
        <View style={{ marginLeft: 25 }}>
          <Ionicons name="checkmark-circle-sharp" size={24} color="green" />
        </View>
      )}
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({});
