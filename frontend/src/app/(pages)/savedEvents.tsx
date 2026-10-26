import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function SavedEventsScreen() {
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <View style={globalStyles.notifyTop}>
                    <Text style={globalStyles.h2}>
                        Saved Events
                    </Text>
                </View>
                <View style={globalStyles.savedTop}>
                    <Text style={globalStyles.h4}>
                        Events you've bookmarked for later.
                    </Text>
                </View>
                <View style={globalStyles.savedTabs}>
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
                        </View>
                    </View>
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
                        </View>
                    </View>
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
                        </View>
                    </View>
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
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}