import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styleHome = StyleSheet.create({
  // ===== style geral da tela =====

  style: {
    backgroundColor: "#fff",
  },

  // ===== botões delivery/reserva =====

  btn: {
    width: 160,
    height: 60,
    backgroundColor: "#fcba03",
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  alignBtn: {
    flexDirection: "row",
    gap: 25,
  },
  alignBtnRow: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.47,
  },

  //===== banner =====

  bannerStyle: {
    marginTop: 50,
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
    backgroundColor: "#fff",
  },

  //alinhamento do ola

  logoAlign: {
    alignItems: "center",
    marginTop: 40,
  },
  logoStyle: {
    width: 200,
    height: 100,
  },
});

export default styleHome;
