import { COLORS } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function search() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.surface }}
    ></SafeAreaView>
  );
}