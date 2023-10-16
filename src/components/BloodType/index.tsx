import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const BloodType = ({ selectedType, onSelect }) => {
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escolha seu tipo sanguíneo:</Text>
      <View style={styles.bloodTypeContainer}>
        {bloodTypes.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.bloodType,
              selectedType === type && styles.selectedBloodType,
            ]}
            onPress={() => onSelect(type)}
          >
            <Text style={styles.bloodTypeText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BloodType;
