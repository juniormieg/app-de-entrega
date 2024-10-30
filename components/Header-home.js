import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HeaderHome = ({ toggleModal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agil Delivery</Text>
      <TouchableOpacity onPress={toggleModal} style={styles.settingsButton}>
        <Text style={styles.settingsText}>⚙️</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6f61",
  },
  settingsButton: {
    padding: 10,
  },
  settingsText: {
    fontSize: 24,
  },
});

export default HeaderHome;
