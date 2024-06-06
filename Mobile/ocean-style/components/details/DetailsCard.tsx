import { COLORS } from "@/constants/Colors";
import { TEXTSTYLES } from "@/constants/TextStyles";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsCard(props: {
  icon: any;
  label: string;
  text: string;
}) {
  return (
    <View style={styles.container}>
      <props.icon width={24} height={24} color={COLORS.subtleDark} />
      <View>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.label}>{props.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 4,
  },
  text: {
    ...TEXTSTYLES.headline_medium,
    color: COLORS.primary,
    fontSize: 24,
  },
  label: {
    ...TEXTSTYLES.body_large,
    color: COLORS.normal,
  },
});
