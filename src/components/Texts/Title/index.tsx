import React from "react";
import { Text, TextStyle } from "react-native";

interface TitleComponentProps {
  title: string;
  style?: TextStyle;
}

const TitleComponent: React.FC<TitleComponentProps> = ({ title, style }) => {
  return <Text style={[defaultStyle, style]}>{title}</Text>;
};

const defaultStyle: TextStyle = {
  fontSize: 50,
  fontWeight: "bold",
  width: "100%",
  left: 60,
};

export default TitleComponent;
