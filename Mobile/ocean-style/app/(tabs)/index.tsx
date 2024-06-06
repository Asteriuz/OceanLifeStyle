import VehicleCard from "@/components/home/VehicleCard";
import { COLORS } from "@/constants/Colors";
import { TEXTSTYLES } from "@/constants/TextStyles";
import { VEHICLESFAKEDATA } from "@/constants/VehicleFakeData";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { onValue, ref } from "firebase/database";
import { db } from "@/firebaseConfig";

interface VehicleProps {
  tie: string;
  name: string;
  modelo: string;
  noise: number;
  status: "Aprovado" | "Reprovado" | "Pendente";
  image: string;
  place: string;
  data: string;
}

export default function TabOneScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

  useEffect(() => {
    const vehicleRef = ref(db, "vehicles/");
    onValue(vehicleRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const vehicles = Object.keys(data).map((key) => {
          return {
            tie: key,
            ...data[key],
          };
        });
        setVehicles(vehicles);
      }
    });
  }, []);

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
                tie={vehicle.tie}
                name={vehicle.name}
                modelo={vehicle.modelo}
                noise={vehicle.noise}
                status={vehicle.status}
                image={vehicle.image}
                place={vehicle.place}
                data={vehicle.data}
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
    ...TEXTSTYLES.title_large,
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
    ...TEXTSTYLES.body_medium,
    paddingVertical: 8,
    color: COLORS.subtleDark,
  },
});
