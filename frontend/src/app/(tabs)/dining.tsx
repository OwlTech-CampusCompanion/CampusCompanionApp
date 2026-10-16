import { Text, View, Image, TextInput, Pressable, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function DiningScreen() {
  return (
    <ScrollView>  
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
              <View style={globalStyles.eventTitles}>
                <Text style={globalStyles.h4}>
                  Dining
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
                  placeholder="Search dining locations..."
                  placeholderTextColor={"black"}
                />
              </View>
              <View style={globalStyles.diningCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/ChickFila-Logo.png")}
                      style={globalStyles.diningImage}
                    />
                </View>
                <View style={globalStyles.diningInfo}>
                  <Text style={globalStyles.diningName}>Chick-Fila-A</Text>
                  <Text style={globalStyles.diningTime}>Open 11:30 AM - 2:20 PM</Text>
                  <Text style={globalStyles.diningLocation}>How far from me</Text>
                </View>
              </View>
              <View style={globalStyles.diningCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/DiningHall-Image.jpg")}
                      style={globalStyles.diningImage}
                    />
                </View>
                <View style={globalStyles.diningInfo}>
                  <Text style={globalStyles.diningName}>Stingers Dining Hall</Text>
                  <Text style={globalStyles.diningTime}>Open 6:00 AM - 10:00 PM</Text>
                  <Text style={globalStyles.diningLocation}>How far from me</Text>
                </View>
              </View>
              <View style={globalStyles.diningCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/Dunkin-Logo.png")}
                      style={globalStyles.diningImage}
                    />
                </View>
                <View style={globalStyles.diningInfo}>
                  <Text style={globalStyles.diningName}>DunkIn'</Text>
                  <Text style={globalStyles.diningTime}>Open 6:00 AM - 10:00 PM</Text>
                  <Text style={globalStyles.diningLocation}>How far from me</Text>
                </View>
              </View>
              <View style={globalStyles.diningCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/LocalSpot-Logo.jpg")}
                      style={globalStyles.diningImage}
                    />
                </View>
                <View style={globalStyles.diningInfo}>
                  <Text style={globalStyles.diningName}>The Local Spot</Text>
                  <Text style={globalStyles.diningTime}>Open 10:00 AM - 6:00 PM</Text>
                  <Text style={globalStyles.diningLocation}>How far from me</Text>
                </View>
              </View>
              <View style={globalStyles.diningCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/HighRoll-Logo.png")}
                      style={globalStyles.diningImage}
                    />
                </View>
                <View style={globalStyles.diningInfo}>
                  <Text style={globalStyles.diningName}>High Roller Sushi</Text>
                  <Text style={globalStyles.diningTime}>Open 11:30 AM - 2:00 PM</Text>
                  <Text style={globalStyles.diningLocation}>How far from me</Text>
                </View>
              </View>
              <View style={globalStyles.diningCard}>
                <View>
                  <Image
                      source={require("../../../assets/images/Stacks-Logo.jpg")}
                      style={globalStyles.diningImage}
                    />
                </View>
                <View style={globalStyles.diningInfo}>
                  <Text style={globalStyles.diningName}>STACKS</Text>
                  <Text style={globalStyles.diningTime}>10:30 AM - 6:00 PM </Text>
                  <Text style={globalStyles.diningLocation}>How far from me</Text>
                </View>
              </View>
            </View>
        </TouchableWithoutFeedback>
      </ScrollView>
  );
}