import { Text, View, Image, Pressable } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";
import AnimatedButton from "../../app/components/AnimatedButton";

export default function ProfileScreen() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.profileBackground}>
        <View style={globalStyles.profileImage}>
          
        </View>
        <Text style={globalStyles.h4}>FULL NAME</Text>
        <Text style={globalStyles.h3}>KSU Student</Text>
        <Text style={globalStyles.h3}>JohnDoe23@students.kennesaw.edu</Text>
      </View>
      <View style={globalStyles.profileTabs}>
        <AnimatedButton
          onPress={() => router.push("/savedEvents")}
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Saved Events</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </AnimatedButton>
        <AnimatedButton
          onPress={() => router.push("/favoriteLocations")}
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Favorite Locations</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </AnimatedButton>
        <AnimatedButton
          onPress={() => router.push("/notification")}
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Notifications</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </AnimatedButton>
        <AnimatedButton
          onPress={() => router.push("/settings")}
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Settings</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </AnimatedButton>
      </View>
      <View>
        <AnimatedButton
          onPress={() => router.replace("/")}
          style={globalStyles.logoutButton}
        >
          <Text style={globalStyles.buttonText}>
            Log Out
          </Text>
        </AnimatedButton>
      </View>
    </View>
  );
}