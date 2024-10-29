import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // Verifique se este caminho está correto

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setError(""); // Reseta o erro antes de tentar o login

    // Tenta fazer login
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Se o login for bem-sucedido, redireciona para a Home
        navigation.replace("Home");
      })
      .catch((loginError) => {
        console.error("Erro no login:", loginError);
        // Se o usuário não for encontrado, tenta criar um novo usuário
        if (loginError.code === "auth/user-not-found") {
          createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
              // Usuário criado com sucesso, redireciona para a Home
              navigation.replace("Home");
            })
            .catch((signupError) => {
              console.error("Erro ao criar usuário:", signupError);
              setError("Falha ao cadastrar: " + signupError.message);
            });
        } else {
          // Se houver outro tipo de erro, exibe mensagem de erro
          setError("Falha no login: " + loginError.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.eyeIcon}>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
        </TouchableOpacity>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login ou Cadastrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    marginLeft: 10,
    fontSize: 24,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
