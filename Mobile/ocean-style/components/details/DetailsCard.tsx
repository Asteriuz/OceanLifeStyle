import RightArrow from "@/assets/icons/right_arrow";
import { COLORS } from "@/constants/Colors";
import { RootStackParamList } from "@/constants/RootStackParamList";
import { textStyles } from "@/constants/Text";
import { useNavigation, useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function DetailsCard(props: {
  icon: any;
  label: string;
  text: string;
}) {
  return (
    <View style={styles.container}>
      <props.icon width={24} height={24} color={COLORS.subtleDark} />
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.label}>{props.label}</Text>
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
  },
  text: {
    ...textStyles.headline_medium,
    color: COLORS.primary,
  },
  label: {
    ...textStyles.body_large,
    color: COLORS.normal,
  },
});
