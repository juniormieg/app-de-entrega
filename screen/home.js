import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Switch,
  Alert,
} from "react-native";
import { getAuth, signOut } from "firebase/auth"; // Importando signOut
import HeaderHome from "../components/Header-home";
import CarouselHome from "../components/Carousel-home";
import StoreList from "../components/StoreList";
import SettingsModal from "../components/SettingsModal";

const images = [
  require("../assets/prato1.jpg"),
  require("../assets/prato2.jpg"),
  require("../assets/prato3.jpg"),
];

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const toggleTheme = () => setDarkTheme(!darkTheme);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      Alert.alert("Sucesso", "Você saiu com sucesso!");
      // Aqui você pode redirecionar para a tela de login
      // navigation.navigate('Login'); // Descomente e substitua pelo nome da sua tela de login
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      Alert.alert("Erro", "Não foi possível sair. Tente novamente.");
    }
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
      <StoreList darkTheme={darkTheme} />
      <SettingsModal
        visible={isModalVisible}
        onClose={toggleModal}
        darkTheme={darkTheme}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout} // Passando a função de logout
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
