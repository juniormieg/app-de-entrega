import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const CarouselHome = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Altera a imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <View style={styles.container}>
      <Image
        source={images[currentIndex]}
        style={[styles.image, { width: screenWidth * 0.9 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    alignItems: "center",
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default CarouselHome;
