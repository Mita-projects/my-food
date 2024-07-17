import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

export const styles = StyleSheet.create({
  safeArea: { flex: 1 },

  container: { paddingHorizontal: 20, paddingVertical: 10 },

  button: {
    width: "100%",
    padding: 10,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: { color: COLORS.light.white, fontSize: 16 },

  input: {
    width: "100%",
    paddingHorizontal: 10,
    height: 40,
    color: COLORS.light.black,
    borderRadius: 8,
  },

  logo: { alignItems: "center", justifyContent: "center", width: "100%" },

  smallText: { color: COLORS.light.white, fontSize: 14, fontWeight: "400" },

  mediumText: { fontSize: 18, fontWeight: "600", color: COLORS.light.white },

  mediumText2: { fontSize: 18, fontWeight: "600", color: COLORS.light.black },

  bigText: { fontSize: 24, fontWeight: "800", color: COLORS.light.white },

  bigText2: { fontSize: 24, fontWeight: "800", color: COLORS.light.primary },

  bigText3: { fontSize: 24, fontWeight: "600", color: COLORS.light.black },

  checkBox: {
    backgroundColor: "white",
    borderRadius: 1,
  },

  logoCon: {
    paddingTop: 100,
    paddingBottom: 50,
  },

  regCon: {
    paddingVertical: 10,
  },

  passwordCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 35,
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },

  signinImgCon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  signinImg: {
    height: 23,
    width: 23,
    position: "absolute",
    zIndex: 1,
    left: 30,
  },

  signinLink: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },

  moneyCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  numberCon: {
    height: 25,
    width: 50,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  upperNav: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
  },

  deliveryCon: {
    flexWrap: "wrap",
    width: 200,
    height: 50,
    flexDirection: "row",
    paddingLeft: 55,
  },

  checkoutCon: {
    height: 100,
    width: 400,
    backgroundColor: "rgba(245, 245, 245, 1)",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
    elevation: 10,
  },

  checkoutCon1: {
    height: 100,
    width: 380,
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },

  checkoutCon2: {
    height: 70,
    width: 380,
    paddingHorizontal: 30,
    elevation: 5,
    marginVertical: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: 15,
  },

  imageCon: {
    height: 100,
    width: 100,
    marginHorizontal: 115,
    marginTop: 50,
    borderRadius: 50,
    overflow: "hidden",
  },

  imageMain: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },

  profileTextCon: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },

  sidebarContainer: {
    flex: 1,
    backgroundColor: COLORS.light.primary,
    padding: 20,
  },

  passwordCase: {
    backgroundColor: "white",
    width: 200,
    height: 30,
    justifyContent: "center",
    paddingLeft: 25,
    marginLeft: -25,
    borderRadius: 10,
  },

  profletextCon: {
    flexDirection: "row",
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },

  paymentCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20, 
  },
});
