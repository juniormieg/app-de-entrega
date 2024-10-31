import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HeaderHome from "../components/Header-home";
import CarouselHome from "../components/Carousel-home";
import StoreList from "../components/StoreList";
import SettingsModal from "../components/SettingsModal";

const images = [
  require("../assets/prato1.jpg"),
  require("../assets/prato2.jpg"),
  require("../assets/prato3.jpg"),
];

const HomeScreen = ({ navigation }) => {
  // Adicione a prop de navegação aqui
  const [isModalVisible, setModalVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkTheme ? "#333" : "#f5f5f5" },
      ]}
    >
      <HeaderHome toggleModal={toggleModal} />
      <CarouselHome images={images} />
      <StoreList darkTheme={darkTheme} />
      <SettingsModal
        visible={isModalVisible}
        onClose={toggleModal}
        darkTheme={darkTheme}
        onToggleTheme={toggleTheme}
        navigation={navigation} // Passe a navegação aqui
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
  },
});

export default HomeScreen;
