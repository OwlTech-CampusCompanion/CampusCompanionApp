import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link, router } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { loginUser } from "../services/api";
import AnimatedButton from "../app/components/AnimatedButton";

export default function Index() {

  const { setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function makes sure these email or password aren't empty

  const [isLoading, setIsLoading ] = useState(false);

  const handleLogin = async () => {
    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter your password!");
      return;
    }
    
    try {
      setIsLoading(true);

      const response = await loginUser(email.trim(), password);

      setUser(response.user);

      await SecureStore.setItemAsync("authToken", response.token);

      router.replace("/home");
    } catch (error) {

      const message =
        error instanceof Error
        ? error.message
        : "Unable to log in. Please try again.";

      alert(
        message.includes("401")
        ? "Invalid email or password."
        : message
      );
    }  finally {
      setIsLoading(false);
    }
  };

  // Login UI
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <View style={globalStyles.logoBackground}>
          <Image
            source={require("../../assets/images/KSU-Logo.png")}
            style={globalStyles.logo}
          />
          <Text style={globalStyles.title}>Campus Companion</Text>
          <Text style={globalStyles.title}>Kennesaw State University</Text>
        </View>
        <View style={globalStyles.loginBody}>
          <View style={globalStyles.loginInput}>
            <Image
              source={require("../../assets/images/Email-Logo.png")}
              style={globalStyles.iconLogo}
            />
            <TextInput
              style={globalStyles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor={"black"}
            />
          </View>
        </View>
        <View style={globalStyles.loginInput}>
          <Image
            source={require("../../assets/images/Password-Logo.png")}
            style={globalStyles.iconLogo}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={"black"}
            secureTextEntry
          />
        </View>
        <View style={globalStyles.loginLinks}>
          <AnimatedButton
              onPress={handleLogin}
              disabled={isLoading}
              style={globalStyles.loginButton}
          >
            <Text style={globalStyles.buttonText}>{isLoading ? "Loggin in..." : "Login"}</Text>
            </AnimatedButton>
          <Text style={globalStyles.text}>Forgot password?</Text>
        </View>
        <View style={globalStyles.loginLinks}>
          <Text style={globalStyles.text}>Don't have an account? {" "}
            <Link href="/signup" style={globalStyles.signupLink}>
            Sign Up
            </Link>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

