import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { Link } from "expo-router";
import { dismiss, router } from "expo-router/build/global-state/router";

export default function Index() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <View style={globalStyles.logoTabsBackground}>
          <Image
            source={require("../../assets/images/KSU-Logo.png")}
            style={globalStyles.logo}
          />
          <Text style={globalStyles.title}>Campus Companion</Text>
          <Image
            source={require("../../assets/images/Notification-Logo.png")}
            style={globalStyles.iconLogo}
          />
        </View>
        <View style={globalStyles.hTitles}>
          <Text style={globalStyles.h2}>
            Good morning, (person name)!
          </Text>
        </View>
        <View style={globalStyles.loginInput}>
          <Image
            source={require("../../assets/images/Search-Logo.png")}
            style={globalStyles.iconLogo}
          />
          <TextInput
            style={globalStyles.input}
            autoCapitalize="words"
            placeholder="Search campus..."
            placeholderTextColor={"black"}
          />
        </View>
        <View style={globalStyles.hTitles}>
          <Text style={globalStyles.h3}>
            Quick Access
          </Text>
          <Link href="/events">
            <Text>View All</Text>
          </Link>
        </View>
        <View style={globalStyles.tabHolder}>
          <View>
            <Pressable
              onPress={() => router.push("/map")}
              style={globalStyles.tabPress}
            >
              <Image
                source={require("../../assets/images/Map-Logo.png")}
                style={globalStyles.iconLogo}
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
                source={require("../../assets/images/Events-Logo.png")}
                style={globalStyles.iconLogo}
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
                source={require("../../assets/images/Dining-Logo.png")}
                style={globalStyles.iconLogo}
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
                source={require("../../assets/images/Bus-Logo.png")}
                style={globalStyles.iconLogo}
              />
              <Text style={globalStyles.buttonText}>
                Shuttle
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={globalStyles.hTitles}>
          <Text style={globalStyles.h3}>
            Saved Events
          </Text>
          <Link href="/events">
            <Text>View All</Text>
          </Link>
        </View>
        <View style={globalStyles.eventHolder}>
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
                <Text style={globalStyles.eventDay}>18</Text>
              </View>
              <View style={globalStyles.eventInfo}>
                <Text style={globalStyles.eventName}>Fall Career Fair</Text>
                <Text style={globalStyles.eventLocation}>Student Center</Text>
                <Text style={globalStyles.eventTime}>10:00 AM - 2:00 PM</Text>
              </View>
            </View>
          </View>
          <View style={globalStyles.footerTabs}>
            <View>
              <Image
                source={require("../../assets/images/Home-Logo.png")}
                style={globalStyles.iconLogo}
              />
              <Text style={globalStyles.buttonText}>
                Home
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/images/Map-Logo.png")}
                style={globalStyles.iconLogo}
              />
              <Text style={globalStyles.buttonText}>
                Map
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/images/Events-Logo.png")}
                style={globalStyles.iconLogo}
              />
              <Text style={globalStyles.buttonText}>
                Events
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/images/Dining-Logo.png")}
                style={globalStyles.iconLogo}
              />
              <Text style={globalStyles.buttonText}>
                Dining
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/images/Profile-Logo.png")}
                style={globalStyles.iconLogo}
              />
              <Text style={globalStyles.buttonText}>
                Profile
              </Text>
            </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}