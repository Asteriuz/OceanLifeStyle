import ErrorPage from "@/components/error/ErrorPage";
import { COLORS } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ErrorPage
        image={require("@/assets/images/illustration/lifeguard.png")}
        title1="Oops!"
        title2="Conecte-se à Internet"
        subtitle="Você está off-line. Verifique sua conexão e tente novamente."
        buttonText="TENTAR NOVAMENTE"
        handlePress={() => console.log("Tentando novamente...")}
      />
    </SafeAreaView>
  );
}
