// components/StoreItem.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StoreItem = ({ name }) => {
  return (
    <View style={styles.storeItem}>
      <Text style={styles.storeText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storeItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  storeText: {
    fontSize: 18,
  },
});

export default StoreItem;
