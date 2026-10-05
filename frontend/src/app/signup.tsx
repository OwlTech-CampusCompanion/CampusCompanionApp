import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback  } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";
import { useState } from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

   // function makes sure these signup form isn't empty
  const handleSignUp = () => {
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

    // Signup logic later
  }


  // SignUp UI
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
          <Pressable 
            onPress={handleSignUp}
            style={globalStyles.loginButton}>
            <Text style={globalStyles.buttonText}>Create Account</Text>
            </Pressable>
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
  );
}
