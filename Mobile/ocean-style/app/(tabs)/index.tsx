import VehicleCard from "@/components/home/VehicleCard";
import { COLORS } from "@/constants/Colors";
import { textStyles } from "@/constants/Text";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const vehicles = [
    {
      name: "Corsário",
      noise: 60,
      status: "Aprovado" as const,
      image: require("@/assets/images/vehicles/Cruise.png"),
    },
    {
      name: "Azimut 60",
      noise: 70,
      status: "Pendente" as const,
      image: require("@/assets/images/vehicles/Azimut-60.png"),
    },
    {
      name: "Lagoon 450",
      noise: 90,
      status: "Reprovado" as const,
      image: require("@/assets/images/vehicles/Lagoon.jpg"),
    },
    {
      name: "Cigarette Racing",
      noise: 105,
      status: "Reprovado" as const,
      image: require("@/assets/images/vehicles/Cigarette.jpg"),
    },
    {
      name: "Viking 55",
      noise: 95,
      status: "Aprovado" as const,
      image: require("@/assets/images/vehicles/Viking-55.jpg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.surface }}>
      <StatusBar backgroundColor={COLORS.white} translucent={false} />
      <View style={{ flex: 1 }}>
        <View style={styles.topSection}>
          <Text style={styles.title}>Meus Veículos</Text>
          <View style={{ flexDirection: "row", gap: 24 }}>
            <Text
              style={[
                styles.categoriaText,
                selectedCategory === "Todos" && styles.categoriaTextActive,
              ]}
              onPress={() => setSelectedCategory("Todos")}
            >
              Todos
            </Text>
            <Text
              style={[
                styles.categoriaText,
                selectedCategory === "Pendente" && styles.categoriaTextActive,
              ]}
              onPress={() => setSelectedCategory("Pendente")}
            >
              Pendente
            </Text>
            <Text
              style={[
                styles.categoriaText,
                selectedCategory === "Aprovado" && styles.categoriaTextActive,
              ]}
              onPress={() => setSelectedCategory("Aprovado")}
            >
              Aprovado
            </Text>
            <Text
              style={[
                styles.categoriaText,
                selectedCategory === "Reprovado" && styles.categoriaTextActive,
              ]}
              onPress={() => setSelectedCategory("Reprovado")}
            >
              Reprovado
            </Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 24 }}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          {vehicles
            .filter((vehicle) =>
              selectedCategory === "Todos"
                ? true
                : vehicle.status === selectedCategory
            )
            .map((vehicle, index) => (
              <VehicleCard
                key={index}
                name={vehicle.name}
                noise={vehicle.noise}
                status={vehicle.status}
                image={vehicle.image}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: COLORS.white,
    gap: 12,
    paddingHorizontal: 24,
    paddingTop: 32,
    width: "100%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    ...textStyles.title_large,
    lineHeight: 32,
    color: COLORS.normal,
    fontSize: 32,
    overflow: "visible",
  },
  categoriaTextActive: {
    paddingVertical: 8,
    borderBottomWidth: 2,
    color: COLORS.normal,
    borderColor: COLORS.normal,
  },
  categoriaText: {
    ...textStyles.body_medium,
    paddingVertical: 8,
    color: COLORS.subtleDark,
  },
});
