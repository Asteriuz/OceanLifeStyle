import Calendar from "@/assets/icons/calendar";
import RightArrow from "@/assets/icons/right_arrow";
import Tick from "@/assets/icons/tick";
import Volume from "@/assets/icons/volume";
import DetailsCard from "@/components/details/DetailsCard";
import Maps from "@/components/details/Maps";
import { COLORS } from "@/constants/Colors";
import { RootStackParamList } from "@/constants/RootStackParamList";
import { TEXTSTYLES } from "@/constants/TextStyles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type DetailsRouteProps = RouteProp<RootStackParamList, "details">;

export default function Details() {
  const route = useRoute<DetailsRouteProps>();
  const { image, name, modelo, status, tie, noise, data, place } = route.params;

  const noiseString = noise + " dB";

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={{ position: "relative" }}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <View style={styles.backIcon}>
            <RightArrow color={COLORS.white} width={24} height={24} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 32, marginTop: 32, marginBottom: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1, gap: 4 }}>
            {name.length > 11 ? (
              <Text
                style={{
                  ...styles.title,
                  fontSize: 28,
                  lineHeight: 28,
                  marginBottom: 4,
                }}
              >
                {name}
              </Text>
            ) : (
              <Text style={styles.title}>{name}</Text>
            )}
            <Text style={styles.modelo}>{modelo}</Text>
          </View>
          <Text style={styles.tie}>#{tie}</Text>
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
          paddingTop: 8,
          paddingBottom: 24,
          columnGap: 16,
          flexGrow: 0,
        }}
        style={{ flexGrow: 0 }}
      >
        <DetailsCard label="Resultado" text={status} icon={Tick} />
        <DetailsCard label="Ruído" text={noiseString} icon={Volume} />
        <DetailsCard label="Data da Vistoria" text={data} icon={Calendar} />
      </ScrollView>
      <View style={{ flex: 1 }}>
        <Maps input={place} />
      </View>
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
    ...TEXTSTYLES.title_large,
    color: COLORS.normal,
  },
  modelo: {
    ...TEXTSTYLES.title_large,
    color: COLORS.subtleDark,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    padding: 8,
    borderRadius: 8,
  },
  backIcon: {
    width: 24,
    height: 24,
    transform: [{ rotate: "180deg" }],
  },
});
