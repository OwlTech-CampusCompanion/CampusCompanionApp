import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { Link } from "expo-router";
import { router } from "expo-router/build/global-state/router";

export default function Index() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <View style={globalStyles.logoTabsBackground}>
          <Image
            source={require("../../../assets/images/KSU-Logo.png")}
            style={globalStyles.tabsLogo}
          />
          <Text style={globalStyles.tabsTitle}>Campus Companion</Text>
          <View>
            <Image
              source={require("../../../assets/images/Notification-Logo.png")}
              style={globalStyles.notifyLogo}
            />
          </View>
        </View>
        <View style={globalStyles.Titles}>
          <Text style={globalStyles.h4}>
            Good morning, (person name)!
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
          <Link href="/events">
            <Text>View All {">"} </Text>
          </Link>
        </View>
        <View style={globalStyles.tabHolder}>
          <View>
            <Pressable
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
            </Pressable>
          </View>
          <View>
            <Pressable
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
            </Pressable>
          </View>
          <View>
            <Pressable
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
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => router.push("/")}
              style={globalStyles.tabPress}
            >
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.icon}
              />
              <Text style={globalStyles.buttonText}>
                Shuttle
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={globalStyles.homeTitles}>
          <Text style={globalStyles.h4}>
            Saved Events
          </Text>
          <Link href="/events">
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