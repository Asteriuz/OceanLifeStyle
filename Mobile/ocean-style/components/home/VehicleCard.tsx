import RightArrow from "@/assets/icons/right_arrow";
import { COLORS } from "@/constants/Colors";
import { RootStackParamList } from "@/constants/RootStackParamList";
import { textStyles } from "@/constants/Text";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type DetailsProps = NativeStackNavigationProp<
  RootStackParamList,
  "vehicleCard"
>;

export default function VehicleCard(props: {
  name: string;
  noise: number;
  status: "Aprovado" | "Reprovado" | "Pendente";
  image: any;
}) {
  const navigation = useNavigation<DetailsProps>();

  const handlePress = () => {
    navigation.navigate("details", {
      image: props.image,
      name: props.name,
      modelo: "Cruzeiro de passeio",
      status: props.status,
      tie: "#849385",
      noise: props.noise,
      data: "26/05/24",
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, gap: 16 }}>
        <View style={{ flex: 1, gap: 8 }}>
          <Text style={styles.title}>{props.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.infoLabel}>Resultado</Text>
              <Text style={styles.infoText}>{props.status}</Text>
            </View>
            <View
              style={{
                width: 1,
                height: "100%",
                backgroundColor: COLORS.subtleLight,
                marginHorizontal: 8,
              }}
            ></View>
            <View>
              <Text style={styles.infoLabel}>Ruído</Text>
              <Text style={styles.infoText}>{props.noise} dB</Text>
            </View>
          </View>
        </View>
        {/* <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
           <Text style={styles.button}>Ver Detalhes</Text>
          <RightArrow width={18} height={18} color={COLORS.primary} />
        </View> touchable to details page */}
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
          onPress={handlePress}
        >
          <Text style={styles.button}>Ver Detalhes</Text>
          <RightArrow width={18} height={18} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 24,
  },
  title: {
    ...textStyles.title_large,
  },
  infoLabel: {
    ...textStyles.body_medium,
    color: COLORS.subtleDark,
  },
  infoText: {
    ...textStyles.body_medium,
  },
  imageContainer: {
    width: 164,
    height: 104,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  button: {
    ...textStyles.body_large,
    color: COLORS.primary,
    alignItems: "center",
  },
});
