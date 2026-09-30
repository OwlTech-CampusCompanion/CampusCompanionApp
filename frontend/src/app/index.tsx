import { Text, View, Image, TextInput, Pressable, } from "react-native";
import { globalStyles } from "../../styles/global";
import { Link } from "expo-router";

export default function Index() {

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.logoBackground}>
        <Image
          source={require("../../assets/images/KSU-Logo.png")}
          style={globalStyles.logo}
        />
        <Text style={globalStyles.title}>Campus Companion</Text>
        <Text style={globalStyles.title}>Kennesaw State University</Text>
      </View>
      <View>
        <View style={globalStyles.loginInput}>
          <Image
            source={require("../../assets/images/Email-Logo.png")}
            style={globalStyles.emailLogo}
          />
          <TextInput
            style={globalStyles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            placeholderTextColor={"black"}
          />
        </View>
      </View>
      <View style={globalStyles.loginInput}>
        <Image
          source={require("../../assets/images/Password-Logo.png")}
          style={globalStyles.passwordLogo}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          placeholderTextColor={"black"}
          secureTextEntry
        />
      </View>
      <View style={globalStyles.loginLinks}>
        <Pressable 
          //onPress={handleLogin}
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
  );
}

