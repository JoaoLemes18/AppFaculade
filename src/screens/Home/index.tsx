import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Informações sobre Doação de Sangue</Text>
      <Text style={styles.subtitle}>Requisitos para Doar:</Text>
      <Text style={styles.infoText}>
        - Ter idade entre 18 e 65 anos (alguns lugares podem ter requisitos
        diferentes).
      </Text>
      <Text style={styles.infoText}>- Pesar pelo menos 50 kg.</Text>
      <Text style={styles.infoText}>- Estar em boas condições de saúde.</Text>
      <Text style={styles.infoText}>- Não estar grávida ou amamentando.</Text>
      <Text style={styles.infoText}>- Não ter tido uma infecção recente.</Text>
      <Text style={styles.infoText}>
        - Não ter recebido tatuagem ou piercing nos últimos 6 meses.
      </Text>

      <Text style={styles.subtitle}>Benefícios da Doação:</Text>
      <Text style={styles.infoText}>- Salva vidas.</Text>
      <Text style={styles.infoText}>
        - Pode ajudar a identificar problemas de saúde.
      </Text>
      <Text style={styles.infoText}>
        - Promove um senso de comunidade e solidariedade.
      </Text>
      <Text style={styles.infoText}>
        - Não afeta sua saúde, desde que você esteja apto a doar.
      </Text>
    </ScrollView>
  );
}
