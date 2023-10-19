// UserProfileScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Tela de Perfil do Usuário</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.text}>Nome do Usuário</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>usuario@email.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default UserProfileScreen;
