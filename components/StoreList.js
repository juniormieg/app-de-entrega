import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";

const data = [
  {
    id: "1",
    name: "Restaurante A",
    info: "Informações do Restaurante A",
    products: ["Produto A1", "Produto A2", "Produto A3"],
  },
  {
    id: "2",
    name: "Restaurante B",
    info: "Informações do Restaurante B",
    products: ["Produto B1", "Produto B2", "Produto B3"],
  },
  {
    id: "3",
    name: "Restaurante C",
    info: "Informações do Restaurante C",
    products: ["Produto C1", "Produto C2", "Produto C3"],
  },
  {
    id: "4",
    name: "Restaurante D",
    info: "Informações do Restaurante D",
    products: ["Produto D1", "Produto D2", "Produto D3"],
  },
  {
    id: "5",
    name: "Restaurante E",
    info: "Informações do Restaurante E",
    products: ["Produto E1", "Produto E2", "Produto E3"],
  },
];

const StoreList = ({ darkTheme }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handlePress = (store) => {
    setSelectedStore(store);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedStore(null);
  };

  const buttonColor = darkTheme ? "#ff6f61" : "#ff6f61";

  return (
    <View style={styles.storeContainer}>
      <Text style={styles.storeHeader}>Restaurantes</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.storeItem, { backgroundColor: buttonColor }]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.storeText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      {selectedStore && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedStore.name}</Text>
              <Text style={styles.modalText}>{selectedStore.info}</Text>
              <Text style={styles.productsHeader}>Produtos Disponíveis:</Text>
              <FlatList
                data={selectedStore.products}
                renderItem={({ item }) => (
                  <Text style={styles.productText}>{item}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  storeContainer: {
    marginTop: 16,
  },
  storeHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#ff6f61",
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
  },
  storeText: {
    fontSize: 18,
    color: "white",
  },
  row: {
    justifyContent: "space-between",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  productsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productText: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: "#ff6f61",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default StoreList;
