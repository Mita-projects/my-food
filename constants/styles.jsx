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
  rowGap:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"},

  logo: { alignItems: "center", justifyContent: "center", width: "100%" },

  smallText: { color: COLORS.light.white, fontSize: 14, fontWeight: "400" },

  mediumText: { fontSize: 18, fontWeight: "600", color: COLORS.light.white },

  bigText: { fontSize: 24, fontWeight: "800", color: COLORS.light.white },

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
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: "black" 
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
  profilePic:{
    borderRadius: 25,
    height:40,
    width:40,
  },
  foodPic:{
    width: "100%", height: "100%", borderRadius: 90 
  },
  foodContainer:{
    height: "75%",
    width: "100%",
    borderRadius: 90,
    borderColor: "#FFA500",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  foodMenu:{
    width: "48%",
    height: 210,
    borderRadius: 20,
    borderColor: "#EEEEEE",
    borderWidth: 2,
    padding: 12,
    justifyContent: "center",
    marginBottom: 7,
    paddingBottom:20,
    paddingTop:20
  },
  greenCon:{
    alignItems:"center",
    height:165, 
    width:165, 
    borderWidth:10,
    borderColor:"#05C669",
    borderRadius:90,
    justifyContent:"center",
    marginTop:250,left:"25%"
  }

});
