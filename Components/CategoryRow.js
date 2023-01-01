import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryRow = ({ category }) => {
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: "1",
        width: 350,
        justifyContent: "center",
        marginLeft: 20,
        marginTop: 30,
      }}
    >
      <Text style={{ fontSize: 24, textAlign: "center" }}>{category}</Text>
    </View>
  );
};

export default CategoryRow;

const styles = StyleSheet.create({});
