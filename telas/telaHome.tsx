import React, { useState } from "react";
import { View, Text, Pressable, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleHome from "../styles/stylesHome";
import stylePadrao from "../styles/stylesDefault";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import SwiperFlatList from "react-native-swiper-flatlist";
import Feather from "react-native-vector-icons/Feather";
import FA5 from "react-native-vector-icons/FontAwesome5";
import logoDueste from "../components/images/duesteLogo.png";
import bgPizza from "../components/images/bgPizza.jpeg";
import AppLoading from "expo-app-loading";

function TelaPrincipal() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styleHome.fixCinza}>
      <View style={styleHome.styleYellow}>
        <View style={styleHome.logoAlign}>
          <Image source={logoDueste} style={styleHome.logoStyle} />
        </View>
      </View>

      <View style={stylePadrao.styleHome}>
        <View style={styleHome.bannerStyle}>
          <SwiperFlatList
            autoplay
            autoplayDelay={4}
            autoplayLoop
            index={2}
            showPagination
          >
            <View style={[styleHome.child, { backgroundColor: "tomato" }]}>
              <Text style={styleHome.text}>1</Text>
            </View>
            <View style={[styleHome.child, { backgroundColor: "thistle" }]}>
              <Text style={styleHome.text}>2</Text>
            </View>
            <View style={[styleHome.child, { backgroundColor: "skyblue" }]}>
              <Text style={styleHome.text}>3</Text>
            </View>
            <View style={[styleHome.child, { backgroundColor: "teal" }]}>
              <Text style={styleHome.text}>4</Text>
            </View>
          </SwiperFlatList>
        </View>

        <View style={styleHome.pinBGstyle}>
          <FA5
            name="map-marker-alt"
            size={20}
            style={styleHome.pinStyle}
            color={"#fff"}
          >
            <Text style={styleHome.localAlign}>
                Rua Natal, Jardim Paulistano, Nº340
            </Text>
          </FA5>
        </View>

        <View></View>

        <View style={styleHome.alignBtnRow}>
          <View style={styleHome.alignBtn}>
            <Pressable style={styleHome.btn}>
              <Text
                style={{
                  fontFamily: "Montserrat_400Regular",
                  fontSize: 20,
                  color: "#222",
                }}
              >
                Delivery
              </Text>
            </Pressable>

            <Pressable style={styleHome.btn}>
              <Text
                style={{
                  fontFamily: "Montserrat_400Regular",
                  fontSize: 20,
                  color: "#222",
                }}
              >
                Reserva
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TelaPrincipal;
