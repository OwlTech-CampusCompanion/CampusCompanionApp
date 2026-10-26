import { Text, View, Image, TextInput, Keyboard, ScrollView, TouchableWithoutFeedback, Alert,  } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link, router } from "expo-router";
import { useState } from "react";
import { apiRequest } from "../services/api";
import AnimatedButton from "../app/components/AnimatedButton";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

   // function makes sure these signup form isn't empty

  const [isLoading, setIsLoading] = useState(false);
  const handleSignUp = async () => {
    if (name.trim() === "") {
      alert("Please enter your full name!");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter your password!");
      return;
    }

    if (confirmPassword.trim() === "") {
      alert("Please enter your password!");
      return;
    }

    if (confirmPassword !== password) {
      alert("Passwords do not match!");
      return;
    }

    if (isLoading) return;

    try {
      setIsLoading(true);

      await apiRequest("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          fullName: name.trim(),
          email: email.trim().toLowerCase(),
          password: password,
          confirmPassword: confirmPassword,
        }),
      });

      Alert.alert(
        "Account Created!",
        "Your account was created successfully. You can now log in.",
        [
          {
            text: "OK",
            onPress: () => router.replace("/"),
          },
        ]
      );
    } catch (error) {
      const message =
        error instanceof Error
        ? error.message
        : "Unable to create your account. Please try again.";

      Alert.alert(
        "Sign Up Failed",
        message.includes("400")
        ? "Please check your KSU email, password requirements, and signup information."
        : message.includes("409")
        ? "An account with this email may already exist."
        : message
      );
    } finally {
      setIsLoading(false);
    }
  }


  // SignUp UI
  return (
    <ScrollView>
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
          <View style={globalStyles.hTitles}>
            <Text style={globalStyles.h2}>
              Create an Account
            </Text>
            <Text style={globalStyles.h3}>
              Join Campus Companion
            </Text>
          </View>
          <View style={globalStyles.loginInput}>
            <Image
              source={require("../../assets/images/Name-Logo.png")}
              style={globalStyles.iconLogo}
            />
            <TextInput
              style={globalStyles.input}
              autoCapitalize="words"
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor={"black"}
            />
          </View>
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
              placeholder="KSU Email"
              placeholderTextColor={"black"}
            />
          </View>
          <View style={globalStyles.loginInput}>
            <Image
              source={require("../../assets/images/Password-Logo.png")}
              style={globalStyles.iconLogo}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Password"
              placeholderTextColor={"black"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={globalStyles.loginInput}>
            <Image
              source={require("../../assets/images/Password-Logo.png")}
              style={globalStyles.iconLogo}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Confirm Password"
              placeholderTextColor={"black"}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          <View style={globalStyles.loginLinks}>
            <AnimatedButton
              onPress={handleSignUp}
              style={globalStyles.loginButton}>
              <Text style={globalStyles.buttonText}>{isLoading ? "Creating Account..." : "Create Account"}</Text>
            </AnimatedButton>
          </View>
          <View style={globalStyles.loginLinks}>
            <Text style={globalStyles.text}>Already have an account? {" "}
              <Link href="/" style={globalStyles.loginLink}>
              Login
              </Link>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}
