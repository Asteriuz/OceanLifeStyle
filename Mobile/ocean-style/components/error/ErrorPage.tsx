import { COLORS } from "@/constants/Colors";
import { TEXTSTYLES } from "@/constants/TextStyles";
import { Image } from "expo-image";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

interface ErrorPageProps {
  handlePress: () => void;
  image: string;
  title1: string;
  title2?: string;
  subtitle: string;
  buttonText: string;
  gap?: number;
}

export default function ErrorPage(props: ErrorPageProps) {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <View style={[styles.container, { gap: props.gap || 48 }]}>
      <Image
        source={props.image}
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
        <Text style={styles.title}>{props.title1}</Text>
        {props.title2 && <Text style={styles.title}>{props.title2}</Text>}
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
          {props.subtitle}
        </Text>
      </View>
      <Pressable
        style={{
          padding: 12,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
        }}
        onPress={props.handlePress}
      >
        <Text
          style={[
            TEXTSTYLES.headline_small,
            { color: "white", textTransform: "uppercase" },
          ]}
        >
          {props.buttonText}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
