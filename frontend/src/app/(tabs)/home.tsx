import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { Link, router } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import AnimatedButton from "../../app/components/AnimatedButton";

export default function HomeScreen() {

  const { user } = useAuth();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <View style={globalStyles.logoTabsBackground}>
          <Image
            source={require("../../../assets/images/KSU-Logo.png")}
            style={globalStyles.tabsLogo}
          />
          <Text style={globalStyles.tabsTitle}>Campus Companion</Text>
          <Pressable
              onPress={() => router.push("/notification")}
            >
            <Image
              source={require("../../../assets/images/Notification-Logo.png")}
              style={globalStyles.notifyLogo}
            />
          </Pressable>
        </View>
        <View style={globalStyles.Titles}>
          <Text style={globalStyles.h4}>
            Good morning, {user?.fullName ?? "Student"!}
          </Text>
        </View>
        <View style={globalStyles.searchInput}>
          <Image
            source={require("../../../assets/images/Search-Logo.png")}
            style={globalStyles.iconLogo}
          />
          <TextInput
            style={globalStyles.input}
            autoCapitalize="words"
            placeholder="Search campus..."
            placeholderTextColor={"black"}
          />
        </View>
        <View style={globalStyles.homeTitles}>
          <Text style={globalStyles.h4}>
            Quick Access
          </Text>
          <Link href="/quickAccess">
            <Text>View All {">"} </Text>
          </Link>
        </View>
        <View style={globalStyles.tabHolder}>
          <View>
            <AnimatedButton
              onPress={() => router.push("/map")}
              style={globalStyles.tabPress}
            >
              <Image
                source={require("../../../assets/images/Map-Logo.png")}
                style={globalStyles.icon}
              />
              <Text style={globalStyles.buttonText}>
                Map
              </Text>
            </AnimatedButton>
          </View>
          <View>
            <AnimatedButton
              onPress={() => router.push("/events")}
              style={globalStyles.tabPress}
            >
              <Image
                source={require("../../../assets/images/Events-Logo.png")}
                style={globalStyles.icon}
              />
              <Text style={globalStyles.buttonText}>
                Events
              </Text>
            </AnimatedButton>
          </View>
          <View>
            <AnimatedButton
              onPress={() => router.push("/dining")}
              style={globalStyles.tabPress}
            >
              <Image
                source={require("../../../assets/images/Dining-Logo.png")}
                style={globalStyles.icon}
              />
              <Text style={globalStyles.buttonText}>
                Dining
              </Text>
            </AnimatedButton>
          </View>
          <View>
            <AnimatedButton
              onPress={() => router.push("/shuttle")}
              style={globalStyles.tabPress}
            >
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.icon}
              />
              <Text style={globalStyles.buttonText}>
                Shuttle
              </Text>
            </AnimatedButton>
          </View>
        </View>
        <View style={globalStyles.homeTitles}>
          <Text style={globalStyles.h4}>
            Saved Events
          </Text>
          <Link href="/savedEvents">
            <Text>View All {">"}</Text>
          </Link>
        </View>
        <View>
          <View style={globalStyles.eventCard}>
            <View style={globalStyles.eventDate}>
              <Text style={globalStyles.eventMonth}>SEP</Text>
              <Text style={globalStyles.eventDay}>18</Text>
            </View>
            <View style={globalStyles.eventInfo}>
              <Text style={globalStyles.eventName}>Fall Career Fair</Text>
              <Text style={globalStyles.eventLocation}>Student Center</Text>
              <Text style={globalStyles.eventTime}>10:00 AM - 2:00 PM</Text>
            </View>
            </View>
            <View style={globalStyles.eventCard}>
              <View style={globalStyles.eventDate}>
                <Text style={globalStyles.eventMonth}>SEP</Text>
                <Text style={globalStyles.eventDay}>23</Text>
              </View>
              <View style={globalStyles.eventInfo}>
                <Text style={globalStyles.eventName}>Fall Career Fair</Text>
                <Text style={globalStyles.eventLocation}>Student Center</Text>
                <Text style={globalStyles.eventTime}>10:00 AM - 2:00 PM</Text>
              </View>
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}