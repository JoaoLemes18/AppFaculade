import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: colors.theme,
    bottom: 5,
  },
  logo: {
    top: 50,
    left: 70,
    height: 250,
    width: 250,
  },
  clickHereText: {
    color: colors.Textred,
    fontWeight: "bold",
  },
  textcontent: {
    fontSize: 15,
    width: 300,
  },
  HeaderBox: {
    bottom: 5,
    gap: 25,
  },
  HeaderButtons: {
    gap: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  teste: {
    marginBottom: 10,
    gap: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
