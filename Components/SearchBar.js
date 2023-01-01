import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = ({
  enteredText,
  inStockOnly,
  enteredTextHandler,
  inStockOnlyHandler,
}) => {
  const onChangeTextHandler = (newText) => {
    enteredTextHandler(newText);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{
            backgroundColor: "#f0f0f0",
            width: 350,
            height: 50,
            borderColor: "black",
            borderWidth: "1",
            padding: 15,
            fontSize: 18,
            borderRadius: 10,
          }}
          placeholder="Enter product name"
          onChangeText={onChangeTextHandler}
          value={enteredText}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={() => inStockOnlyHandler(!inStockOnly)}>
          {inStockOnly ? (
            <Ionicons name="checkbox" size={30} color="blue" />
          ) : (
            <Ionicons name="checkbox-outline" size={30} color="blue" />
          )}
        </TouchableOpacity>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>
          Show only stocked products
        </Text>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
