import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  boxInicial: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "38%",
    width: "100%",
  },

  textHeader: {
    top: 15,
    right: 12,
    fontSize: 50,
    fontWeight: "bold",
  },
  description: {
    top: 13,
    right: 12,
    fontSize: 22,
  },
  HeaderBox: {
    bottom: 35,
    padding: 10,
    gap: 15,
  },
  HeaderButtons: {
    gap: 18,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
