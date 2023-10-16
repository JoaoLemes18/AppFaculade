import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    top: 25,
  },
  label: {
    fontSize: 16,
    marginLeft: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bloodTypeContainer: {
    marginLeft: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bloodType: {
    width: 80,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  selectedBloodType: {
    backgroundColor: "red",
  },
  bloodTypeText: {
    color: "white",
  },
});
