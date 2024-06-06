import Calendar from "@/assets/icons/calendar";
import RightArrow from "@/assets/icons/right_arrow";
import Tick from "@/assets/icons/tick";
import Volume from "@/assets/icons/volume";
import DetailsCard from "@/components/details/DetailsCard";
import { COLORS } from "@/constants/Colors";
import { RootStackParamList } from "@/constants/RootStackParamList";
import { textStyles } from "@/constants/Text";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type DetailsRouteProps = RouteProp<RootStackParamList, "details">;

export default function Details() {
  const route = useRoute<DetailsRouteProps>();
  const { image, name, modelo, status, tie, noise, data } = route.params;

  const noiseString = noise + " dB";

  return (
    <View>
      <StatusBar style="light" />
      {/* image
        title   tie
        modelo

        status noise data
    */}
      <Image source={image} style={styles.image} />
      <View style={{ paddingHorizontal: 32, marginTop: 32, marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1, gap: 4 }}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.modelo}>{modelo}</Text>
          </View>
          <Text style={styles.tie}>{tie}</Text>
        </View>
      </View>
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          paddingHorizontal: 32,
          paddingVertical: 8,
          columnGap: 16,
        }}
      >
        <DetailsCard label="Resultado" text={status} icon={Tick} />
        {/* noise + dB */}
        <DetailsCard label="Ruído" text={noiseString} icon={Volume} />
        <DetailsCard label="Data da Vistoria" text={data} icon={Calendar} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.normal,
    lineHeight: 32,
  },
  tie: {
    ...textStyles.title_large,
    color: COLORS.normal,
  },
  modelo: {
    ...textStyles.title_large,
    color: COLORS.subtleDark,
  },
});
