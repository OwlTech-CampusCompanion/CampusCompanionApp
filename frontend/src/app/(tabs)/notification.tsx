import { Text, View, Image, Pressable, ScrollView,} from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function NotifyScreen() {
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <View style={globalStyles.notifyTop}>
                    <Text style={globalStyles.h2}>
                        Notifications
                    </Text>
                </View>
                <View style={globalStyles.notifyButtons}>
                    <Pressable
                    style={globalStyles.notifyPress}
                    >
                    <Text style={globalStyles.buttonText}>
                        All
                    </Text>
                    </Pressable>
                    <Pressable
                    style={globalStyles.notifyPress}
                    >
                    <Text style={globalStyles.buttonText}>
                        Unread
                    </Text>
                    </Pressable>
                    <Pressable
                    style={globalStyles.notifyPress}
                    >
                    <Text style={globalStyles.buttonText}>
                        Events
                    </Text>
                    </Pressable>
                    <Pressable
                    style={globalStyles.notifyPress}
                    >
                    <Text style={globalStyles.buttonText}>
                        Shuttle
                    </Text>
                    </Pressable>
                </View>
                <View style={globalStyles.eventTitles}>
                    <Text style={globalStyles.h4}>
                        Today
                    </Text>
                </View>
                <View style={globalStyles.notifyTabs}>
                    <View style={globalStyles.notifyCard}>
                        <View style={globalStyles.notifyImage}>
                            <Image
                                source={require("../../../assets/images/KSU-Logo.png")}
                                style={globalStyles.tabsLogo}
                            />
                        </View>
                        <View style={globalStyles.notifyInfo}>
                            <Text style={globalStyles.notifyName}>
                                Event reminder
                            </Text>
                            <Text style={globalStyles.notifyDescription}>
                                The campus career fair starts at 2:00 PM.
                            </Text>
                            <Text style={globalStyles.notifyTime}>
                                10 minutes ago
                            </Text>
                        </View>
                    </View>
                    <View style={globalStyles.notifyCard}>
                        <View style={globalStyles.notifyImage}>
                            <Image
                                source={require("../../../assets/images/KSU-Logo.png")}
                                style={globalStyles.tabsLogo}
                            />
                        </View>
                        <View style={globalStyles.notifyInfo}>
                            <Text style={globalStyles.notifyName}>
                                Event reminder
                            </Text>
                            <Text style={globalStyles.notifyDescription}>
                                The campus career fair starts at 2:00 PM.
                            </Text>
                            <Text style={globalStyles.notifyTime}>
                                10 minutes ago
                            </Text>
                        </View>
                    </View>
                    <View style={globalStyles.notifyCard}>
                        <View style={globalStyles.notifyImage}>
                            <Image
                                source={require("../../../assets/images/KSU-Logo.png")}
                                style={globalStyles.tabsLogo}
                            />
                        </View>
                        <View style={globalStyles.notifyInfo}>
                            <Text style={globalStyles.notifyName}>
                                Event reminder
                            </Text>
                            <Text style={globalStyles.notifyDescription}>
                                The campus career fair starts at 2:00 PM.
                            </Text>
                            <Text style={globalStyles.notifyTime}>
                                10 minutes ago
                            </Text>
                        </View>
                    </View>
                    <View style={globalStyles.notifyCard}>
                        <Text style={globalStyles.Marking}>
                            Mark all as read
                        </Text>
                        <Text style={globalStyles.Marking}>
                            {">"}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}