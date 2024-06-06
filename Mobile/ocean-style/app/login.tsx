import HideEye from "@/assets/icons/hide_eye";
import ShowEye from "@/assets/icons/show_eye";
import { COLORS } from "@/constants/Colors";
import { TEXTSTYLES } from "@/constants/TextStyles";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { app } from "@/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const [loading, setLoading] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const auth = getAuth(app);

  const handleAuth = async (auth: any, email: string, password: string) => {
    if (!email.trim() && !password.trim()) {
      setEmailValid(false);
      setPasswordValid(false);
      return;
    }
    if (!email.trim()) {
      setEmailValid(false);
      return;
    }
    if (!password.trim()) {
      setPasswordValid(false);
      return;
    }
    try {
      setLoading(true);
      setEmail(email.trim());
      const user = await signInWithEmailAndPassword(auth, email, password);
      setIsLogin(true);
      router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
      setShowWarning(true);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/illustration/jetski.png")}
          style={{ width: 344, height: 229 }}
        />
        <Text
          style={{
            fontFamily: "WorkSans_600SemiBold",
            color: COLORS.normal,
            fontSize: 40,
            lineHeight: 48,
          }}
        >
          Login
        </Text>
        {showWarning && (
          <View
            style={{
              backgroundColor: "#ffcccc",
              padding: 8,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: -16,
            }}
          >
            <Text style={[TEXTSTYLES.label_medium, { color: "#cc0000" }]}>
              USUÁRIO OU SENHA INCORRETOS!
            </Text>
          </View>
        )}
        <View style={{ gap: 24 }}>
          <View style={{ gap: 8 }}>
            <Text
              style={[
                TEXTSTYLES.label_medium,
                !emailValid && { color: "#cc0000" },
              ]}
            >
              Email {!emailValid && "*"}
            </Text>
            <TextInput
              selectionColor={COLORS.primary}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setEmailValid(true);
              }}
              style={[styles.input, !emailValid && { borderColor: "#cc0000" }]}
              keyboardType="email-address"
            />
          </View>
          <View style={{ gap: 8 }}>
            <Text
              style={[
                TEXTSTYLES.label_medium,
                !passwordValid && { color: "#cc0000" },
              ]}
            >
              Senha {!passwordValid && "*"}
            </Text>
            <View>
              <TextInput
                selectionColor={COLORS.primary}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordValid(true);
                }}
                style={[
                  styles.input,
                  !passwordValid && { borderColor: "#cc0000" },
                ]}
                secureTextEntry={!showPassword}
              />
              <Pressable
                style={{ position: "absolute", right: 16, top: 12 }}
                onPress={handleShowPassword}
              >
                {showPassword ? (
                  <HideEye color={COLORS.subtleDark} />
                ) : (
                  <ShowEye color={COLORS.subtleDark} />
                )}
              </Pressable>
            </View>
            <Pressable onPress={() => router.push("/resetPassword")}>
              <Text style={[TEXTSTYLES.label_small, { color: "#7C7D81" }]}>
                Esqueceu a senha?
              </Text>
            </Pressable>
          </View>
        </View>
        <Pressable
          onPress={() => handleAuth(auth, email, password)}
          disabled={loading}
        >
          <View
            style={{
              width: 320,
              height: 48,
              borderRadius: 8,
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={[TEXTSTYLES.label_large, { color: COLORS.white }]}>
              Entrar
            </Text>
          </View>
        </Pressable>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    marginHorizontal: 32,
    marginTop: -48,
  },
  placeholder: {
    width: 304,
    height: 200,
    backgroundColor: COLORS.background,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.subtleLight,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 320,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.subtleLight,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
});
