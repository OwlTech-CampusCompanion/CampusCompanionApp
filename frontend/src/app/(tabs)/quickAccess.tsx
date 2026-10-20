import { Text, View, Image, Pressable, } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function HomeScreen() {
  return (
      <View style={globalStyles.container}>
        <View style={globalStyles.logoTabsBackground}>
          <Image
            source={require("../../../assets/images/KSU-Logo.png")}
            style={globalStyles.tabsLogo}
          />
          <Text style={globalStyles.tabsTitle}>Quick Access</Text>
          <Pressable
              onPress={() => router.push("/notification")}
            >
            <Image
              source={require("../../../assets/images/Notification-Logo.png")}
              style={globalStyles.notifyLogo}
            />
          </Pressable>
        </View>
        
    </View>
  );
}