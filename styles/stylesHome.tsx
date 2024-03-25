import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styleHome = StyleSheet.create({
  // ===== style geral da tela =====

  styleCurve: {
    width: width * 1,
    height: height * 4,
  },

  // ===== botões delivery/reserva =====

  btn: {
    width: 160,
    height: 60,
    backgroundColor: "#fcba03",
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
    marginVertical: width * 0.25,
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
    backgroundColor: "#fcba03",
  },

  //alinhamento do ola

  logoAlign: {
    alignItems: "center",
    marginTop: 25,
  },
  logoStyle: {
    width: 300,
    height: 100,
  },

  //balão de endereço

  pinStyle: {
    marginTop: 10,
    marginLeft: 15,
  },
  localAlign: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 17,
  },
  pinBGstyle: {
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: "#d4473d",
    borderRadius: 50,
    height: height * 0.05,
  },

  //aberto/fechado
  restAberto: {
    backgroundColor: "#7cff75",
  },
  restFechado: {
    backgroundColor: "#b52828",
  },

  //amarelo kkkkkkk
  styleYellow: {
    height: height * 0.2,
  },
});

export default styleHome;
