import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { Link } from "expo-router";
import { router } from "expo-router/build/global-state/router";

export default function EventsScreen() {
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
                  onPress={() => router.push("/events")}
                >
                <Image
                  source={require("../../../assets/images/Notification-Logo.png")}
                  style={globalStyles.notifyLogo}
                />
              </Pressable>
            </View>
            <View style={globalStyles.eventTitles}>
              <Text style={globalStyles.h4}>
                Events
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
                placeholder="Search events..."
                placeholderTextColor={"black"}
              />
            </View>
            <View style={globalStyles.eventButtons}>
              <Pressable
                style={globalStyles.eventPress}
              >
                <Text style={globalStyles.buttonText}>
                  Today
                </Text>
              </Pressable>
              <Pressable
                style={globalStyles.eventPress}
              >
                <Text style={globalStyles.buttonText}>
                  This Week
                </Text>
              </Pressable>
              <Pressable
                style={globalStyles.eventPress}
              >
                <Text style={globalStyles.buttonText}>
                  All Events
                </Text>
              </Pressable>
            </View>
            <Text style={globalStyles.h4}>
              Today - September 13 
            </Text>
            <View>
              <View style={globalStyles.eventsCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/Event-Image.jpg")}
                      style={globalStyles.eventImage}
                    />
                </View>
                <View style={globalStyles.eventInfo}>
                  <Text style={globalStyles.eventName}>Fall Career Fair</Text>
                  <Text style={globalStyles.eventLocation}>Student Center</Text>
                  <Text style={globalStyles.eventTime}>10:00 AM - 2:00 PM</Text>
                  <Pressable
                    style={globalStyles.rsvp}
                  >
                    <Text style={globalStyles.h4}>RSVP</Text>
                  </Pressable>
                </View>
                </View>
                <Text style={globalStyles.h4}>
                  Today - September 13 
                </Text>
                <View style={globalStyles.eventsCard}>
                  <View>
                    <Image
                      source={require("../../../assets/images/Event-Image.jpg")}
                      style={globalStyles.eventImage}
                    />
                  </View>
                  <View style={globalStyles.eventInfo}>
                    <Text style={globalStyles.eventName}>Fall Career Fair</Text>
                    <Text style={globalStyles.eventLocation}>Student Center</Text>
                    <Text style={globalStyles.eventTime}>10:00 AM - 2:00 PM</Text>
                    <Pressable
                    style={globalStyles.rsvp}
                    >
                      <Text style={globalStyles.h4}>RSVP</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
          </View>
        </TouchableWithoutFeedback>
  );
}