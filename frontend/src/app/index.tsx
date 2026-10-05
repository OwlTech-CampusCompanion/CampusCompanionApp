import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function makes sure these email or password aren't empty
  const handleLogin = () => {
    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter your password!");
      return;
    }
    
    // Login logic later
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
          <Pressable 
            onPress={() => router.replace("/home")}
            style={globalStyles.loginButton}>
            <Text style={globalStyles.buttonText}>Login</Text>
            </Pressable>
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

