import React from "react";
import { Text, View, ImageBackground } from "react-native";
import ButtonComponent from "../../components/Button/";
import { styles } from "./styles";

export default function InicialPage({ navigation }: { navigation: any }) {
  return (
    <ImageBackground
      source={require("../../../assets/inital-image.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.boxInicial}>
        <View style={styles.HeaderBox}>
          <Text style={styles.textHeader}>Sangue MT</Text>

          <Text style={styles.description}>
            Unindo nosso Estado, salvando vidas.
          </Text>
        </View>

        <View style={styles.HeaderButtons}>
          <ButtonComponent
            onPress={() => navigation.navigate("Register")}
            text={"Crie sua conta"}
            backgroundColor="#E12A2C"
          />

          <ButtonComponent
            onPress={() => navigation.navigate("Login")}
            text={"Entre aqui"}
            backgroundColor="#E12A2C"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
