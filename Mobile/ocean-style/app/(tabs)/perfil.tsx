import { COLORS } from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";
import ErrorPage from "@/components/error/ErrorPage";

export default function TabOneScreen() {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ErrorPage
        image={require("@/assets/images/illustration/naufrago.png")}
        title1="Desculpas"
        title2="Em manunteção"
        subtitle="Perdão, a página está em manutenção Tente novamente mais tarde"
        buttonText="DESLOGAR"
        handlePress={handleLogout}
      />
    </SafeAreaView>
  );
}
