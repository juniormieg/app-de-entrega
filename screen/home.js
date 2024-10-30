// HomeScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
  Switch,
} from "react-native";
import HeaderHome from "../components/Header-home";
import CarouselHome from "../components/Carousel-home";

const data = [
  { id: "1", name: "Restaurante A" },
  { id: "2", name: "Restaurante B" },
  { id: "3", name: "Restaurante C" },
  { id: "4", name: "Restaurante D" },
  { id: "5", name: "Restaurante E" },
];

const images = [
  require("../assets/prato1.jpg"),
  require("../assets/prato2.jpg"),
  require("../assets/prato3.jpg"),
];

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkTheme ? "#333" : "#f5f5f5" },
      ]}
    >
      <HeaderHome toggleModal={toggleModal} />
      <CarouselHome images={images} />

      <View style={styles.storeContainer}>
        <Text style={styles.storeHeader}>Lojas de Comida</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.storeItem}>
              <Text style={styles.storeText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Configurações</Text>
            <View style={styles.option}>
              <Text style={styles.optionText}>Tema Escuro</Text>
              <Switch value={darkTheme} onValueChange={toggleTheme} />
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  storeContainer: {
    marginTop: 16,
  },
  storeHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
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
  row: {
    justifyContent: "space-between",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;
