import React from "react";
import { View, Text, Pressable, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styleHome from "../styles/stylesHome";
import stylePadrao from "../styles/stylesDefault";
import { useFonts } from "expo-font";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import SwiperFlatList from "react-native-swiper-flatlist";

function TelaPrincipal() {
  useFonts({
    Montserrat_400Regular,
  });

  return (
    <SafeAreaView style={styleHome.fixCinza}>
      <View style={stylePadrao.style}>
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

        <View style={styleHome.alignBtnRow}>
          <View style={styleHome.alignBtn}>
            <Pressable style={styleHome.btn}>
              <Text
                style={{ fontFamily: "Montserrat_400Regular", fontSize: 19 }}
              >
                Delivery
              </Text>
            </Pressable>

            <Pressable style={styleHome.btn}>
              <Text
                style={{ fontFamily: "Montserrat_400Regular", fontSize: 19 }}
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
