import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../../components/Button/";
import FormComponent from "../../components/Forms";
import TitleComponent from "../../components/Texts/Title";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/config";

export default function LoginPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function Login() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuário logado");

      setTimeout(() => {
        navigation.navigate("Home", { user: user.uid });
      }, 1500);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Erro de login:");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.HeaderBox}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
        <TitleComponent
          title="Entre na sua conta"
          style={styles.LoginHeaderText}
        />
      </View>

      <View style={styles.HeaderButtons}>
        <FormComponent
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Seu email"
        />
        <FormComponent
          label="Senha"
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          isPassword={true}
        />

        <View style={styles.teste}>
          <ButtonComponent
            onPress={Login}
            text={"Logar"}
            backgroundColor="red"
            style={{ top: 15, marginBottom: 15 }}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>
              Você não em uma conta?
              <Text style={styles.clickHereText}> Clique aqui</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Initial")}>
            <Text>Volte para a tela inicial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
