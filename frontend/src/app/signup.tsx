import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback  } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";

export default function signup() {


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
            secureTextEntry
          />
        </View>
        <View style={globalStyles.loginLinks}>
          <Pressable 
            //onPress={handleLogin}
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
