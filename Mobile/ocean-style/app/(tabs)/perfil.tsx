import { COLORS } from "@/constants/Colors";
import { TEXTSTYLES } from "@/constants/TextStyles";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/firebaseConfig";
import { router } from "expo-router";

export default function TabOneScreen() {
  const deviceWidth = Dimensions.get("window").width;

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
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/illustration/naufrago.png")}
          style={{
            width: deviceWidth - 48,
            height: deviceWidth - 60,
            overflow: "visible",
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>Desculpas</Text>
          <Text style={styles.title}>Em manunteção</Text>
          <Text
            style={[
              TEXTSTYLES.label_large,
              {
                color: COLORS.subtleDark,
                textAlign: "center",
                marginTop: 12,
                marginHorizontal: 20,
              },
            ]}
          >
            Perdão, a página está em manutenção Tente novamente mais tarde
          </Text>
        </View>
        <Pressable
          style={{
            padding: 12,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
          }}
          onPress={handleLogout}
        >
          <Text style={[TEXTSTYLES.headline_small, { color: "white" }]}>
            DESLOGAR
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    marginHorizontal: 24,
    gap: 48,
  },
  title: {
    fontFamily: "WorkSans_600SemiBold",
    fontSize: 30,
  },
  placeholder: {
    width: 240,
    height: 240,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.subtleLight,
    justifyContent: "center",
    alignItems: "center",
  },
});
