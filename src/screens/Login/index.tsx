import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../../components/Button/";
import FormComponent from "../../components/Forms";
import TitleComponent from "../../components/Texts/Title";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

export default function RegisterPage({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState("");

  async function Register() {
    console.log("email: " + email);
    console.log("password: " + password);

    try {
      console.log("chegou aqui");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("usuario criado");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro no createUserWithEmailAndPassword:", error);
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
            onPress={Register}
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
