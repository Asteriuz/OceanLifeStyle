import { COLORS } from "@/constants/Colors";
import { TEXTSTYLES } from "@/constants/TextStyles";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/illustration/lifeguard.png")}
          style={{ width: deviceWidth - 48, height: deviceWidth - 48 }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>Oops!</Text>
          <Text style={styles.title}>Conecte-se à Internet</Text>
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
            Você está off-line. Verifique sua conexão e tente novamente.
          </Text>
        </View>
        <View
          style={{
            padding: 12,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
          }}
        >
          <Text style={[TEXTSTYLES.headline_small, { color: "white" }]}>
            TENTAR NOVAMENTE
          </Text>
        </View>
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
