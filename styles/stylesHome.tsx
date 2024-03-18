import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styleHome = StyleSheet.create({
  // ===== style geral da tela =====

  style: {
    backgroundColor: "#333333",
  },

  // ===== botões delivery/reserva =====

  btn: {
    width: 150,
    height: 60,
    backgroundColor: "#fcba03",
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  alignBtn: {
    flexDirection: "row",
    gap: 25,
  },
  alignBtnRow: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.7,
  },

  //===== banner =====

  bannerStyle: {
    marginTop: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  child: {
    width,
    justifyContent: "center",
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center",
  },

  //fix linha branca iOS

  fixCinza: {
    backgroundColor: "#333",
  },
});

export default styleHome;
