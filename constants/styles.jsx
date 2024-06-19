import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  container: { padding: 20 },

  button: { width: "100%", padding: 10, borderRadius: 16, alignItems:'center' },
  buttonText: { color: COLORS.light.white, fontSize: 16 },

  input: {
    width: "100%",
    paddingHorizontal: 10,
    height: 40,
    color: COLORS.light.black,
    borderRadius: 8,
  },

  logo: { alignItems: "center", justifyContent: "center", width: "100%" },

  smallText: { color: COLORS.light.black, fontSize: 14, fontWeight: "400" },

  mediumText: { fontSize: 18, fontWeight: "600", color: COLORS.light.white },

  bigText: { fontSize: 24, fontWeight: "800", color: COLORS.light.black },

  checkBox: {
    backgroundColor: "white",
    borderRadius: 1,
  },

  logoCon: {
    paddingTop: 100,
    paddingBottom: 50,
  },

  regCon: {
    paddingVertical: 10
  },

  passwordCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 35,
    alignItems: "center",
  },
});
