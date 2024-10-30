// CarouselHome.js

import React from "react";
import { View, Image, StyleSheet, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CarouselHome = ({ images }) => {
  return (
    <FlatList
      data={images}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image source={item} style={styles.image} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: width * 0.9,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: width * 0.05, // Margem para centralizar
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default CarouselHome;
