import ImagePlaceholder from "@/assets/icons/imagePlaceholder";
import { COLORS } from "@/constants/Colors";
import { textStyles } from "@/constants/Text";
import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  const deviceWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <View style={styles.placeholder}>
          <ImagePlaceholder color={COLORS.subtleDark} width={24} height={24} />
        </View> */}
        <Image source={require("@/assets/images/logo/logo.png")} style={{ width: 276, height: 176.75 }} />
        <View style={{ alignItems: "center", gap: 12 }}>
          <Text
            style={[
              textStyles.headline_large,
              { color: COLORS.normal, textAlign: "center" },
            ]}
          >
            Explore o Oceano Tranquilo
          </Text>
          <Text style={[textStyles.body_large, { color: COLORS.normal }]}>
            Deixando o mar respirar em silêncio
          </Text>
        </View>
        <View style={{ alignItems: "center", gap: 24 }}>
          <Link href={"/register"}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                paddingVertical: 16,
                borderRadius: 16,
                width: 320,
              }}
            >
              <Text
                style={[
                  textStyles.label_large,
                  { color: COLORS.white, textAlign: "center" },
                ]}
              >
                REGISTRE-SE
              </Text>
            </View>
          </Link>
          <Link href={"/login"}>
            <View
              style={{
                backgroundColor: COLORS.white,
                borderWidth: 1,
                borderColor: COLORS.primary,
                paddingVertical: 16,
                borderRadius: 16,
                width: 320,
              }}
            >
              <Text
                style={[
                  textStyles.label_large,
                  { color: COLORS.black, textAlign: "center" },
                ]}
              >
                LOGIN
              </Text>
            </View>
          </Link>
        </View>
        <Text
          style={[
            textStyles.label_small,
            { color: COLORS.subtleDark, textAlign: "center" },
          ]}
        >
          Ao criar sua conta, você concorda com nossos{" "}
          <Text style={{ color: COLORS.primary }}>Termos de Uso</Text> e{" "}
          <Text style={{ color: COLORS.primary }}>Política de Privacidade</Text>
        </Text>
      </View>
      {/* <View style={styles.backgroundContainer}>
        <ImagePlaceholder color={COLORS.subtleDark} width={24} height={24} />
      </View> */}
      {/* width = deviceWidth, height = 168 */}
      <Image source={require("@/assets/images/illustration/underwater-silhouette.png")} style={{ width: deviceWidth, height: 168 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    marginHorizontal: 32,
    marginTop: 48,
  },
  placeholder: {
    width: 304,
    height: 144,
    backgroundColor: COLORS.background,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.subtleLight,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 168,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});
