import { Text, View, Image, TextInput, Pressable } from "react-native";
import { globalStyles } from "../../../styles/global";
import { Link } from "expo-router";
import { router } from "expo-router/build/global-state/router";

export default function ProfileScreen() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.profileBackground}>
        <Image
          source={require("../../../assets/images/ProfileBig-logo.png")}
          style={globalStyles.profileImage}
        />
        <Text style={globalStyles.h4}>FULL NAME</Text>
        <Text style={globalStyles.h3}>KSU Student</Text>
        <Text style={globalStyles.h3}>JohnDoe23@students.kennesaw.edu</Text>
      </View>
      <View style={globalStyles.profileTabs}>
        <Pressable
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Saved Events</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </Pressable>
        <Pressable
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Favorite Locations</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </Pressable>
        <Pressable
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Notifications</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </Pressable>
        <Pressable
          style={globalStyles.profileTab}
        >
          <Text style={globalStyles.textTab}>Settings</Text>
          <Text style={globalStyles.textTab}>{">"}</Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          onPress={() => router.replace("/")}
          style={globalStyles.logoutButton}
        >
          <Text style={globalStyles.buttonText}>
            Log Out
          </Text>
        </Pressable>
      </View>
    </View>
  );
}