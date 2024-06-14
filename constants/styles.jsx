import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  container: { padding: 10 },

  button: { width: "100%", padding: 10, borderRadius: 16 },
  buttonText: { color: COLORS.light.white, fontSize: 16 },

  input: {
    width: "100%",
    paddingHorizontal: 10,
    height: 40,
    color: COLORS.light.white,
    borderRadius: 8,
  },

  logo: { alignItems: "center", justifyContent: "center", width: "100%" },

  smallText: { color: COLORS.light.white, fontSize: 14, fontWeight: "400" },

  mediumText: { fontSize: 18, fontWeight: "600", color: COLORS.light.white },

  bigText: { fontSize: 24, fontWeight: "800", color: COLORS.light.white },

  checkBox: {
    height: 14,
    width: 14,
    marginLeft: 25,
    backgroundColor: "white",
    borderRadius: 1,
  },
});