import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FormInputComponentProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
}

const FormInputComponent: React.FC<FormInputComponentProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  isPassword = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelStyle = {
    color: isFocused ? "#3758a5" : "black",
  };

  return (
    <View style={styles.formcontainer}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formcontainer: {
    top: 15,
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    gap: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderBottomWidth: 1,
    width: 250,
  },
  input: {
    flex: 1,
    fontSize: 17,
    padding: 2,
  },
  inputFocused: {
    borderColor: "#3758a5",
  },
});

export default FormInputComponent;
