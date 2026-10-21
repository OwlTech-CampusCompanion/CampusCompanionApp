import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    // ==================================================
    // GENERAL LAYOUT
    // ==================================================
    container: {
        flex: 1,
    },

    // ==================================================
    // SHARED TEXT STYLES
    // ==================================================
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    text: {
        fontSize: 16,
    },

    h2: {
        fontSize: 24,
        fontWeight: "bold",
    },

    h3: {
        fontSize: 18,
    },

    h4: {
        fontSize: 22,
        fontWeight: "bold"
    },

    h5: {
        color: "white",
        fontSize: 16
    },

    buttonText: {
        margin: "auto",
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },

    textTab: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },

    // ==================================================
    // HEADER AND NAVIGATION TABS
    // ==================================================
    logoBackground: {
        backgroundColor: "black",
        padding: 30,
        marginBottom: 20,
    },

    logoTabsBackground: {
        backgroundColor: "black",
        padding: 25,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        height: 100,
    },

    tabsLogo: {
        width: 40,
        height: 40,
    },

    tabsTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },

    notifyLogo: {
        color: "white",
        height: 30,
        width: 30,
    },

    tabPress: {
        backgroundColor: "black",
        height: 100,
        width: 90,
        borderRadius: 16,
        alignItems: "center",
        padding: 10,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,
    },

    tabHolder: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        marginBottom: 30
    },

    // ==================================================
    // LOGIN AND SIGNUP SCREENS
    // ==================================================
    loginBody: {
        marginTop: 40
    },

    logo: {
        height: 150,
        width: 150,
        margin: "auto",
        padding: 10,
        marginTop: 20,
    },

    loginInput: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "rgba(52, 52, 52, 0.05)",
        width: 350,
        margin: "auto",
        marginBottom: 20,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
        
    },

    iconLogo: {
        width: 20,
        height: 20,
        marginRight: 8,
        marginLeft: 8
    },

    icon: {
        width: 20,
        height: 20,
        marginTop: 10
    },

    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
        height: 50,
    },

    loginLinks: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },

    loginButton: {
        borderRadius: 12,
        backgroundColor: "black",
        width: 350,
        height: 50,
        marginBottom: 20,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    signupLink: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic"
    },

    loginLink: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic"
    },

    // ==================================================
    // SHARED SCREEN TITLES AND HEADINGS
    // ==================================================
    hTitles: {
        padding: 10,
        flexDirection: "column",
        marginLeft: 10,
        marginBottom: 10
    },

    homeTitles: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
    },

    Titles: {
        padding: 10,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 20
    },

    // ==================================================
    // HOME SCREEN AND QUICK ACCESS
    // ==================================================
    quickTabs: {
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
    },

    accessTabs: {
        gap: 10
    },

    tabs: {
        backgroundColor: "black",
        padding: 10,
        gap: 10,
        borderRadius: 16,
        height: 125,
        justifyContent: "center",
        alignItems: "center",

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,
    },

    accessTitles: {
        padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 10,
        marginTop: 25
    },

    eventActivity: {
        color: "white"
    },

    // ==================================================
    // EVENTS SCREEN AND EVENT CARDS
    // ==================================================
    eventCard: {
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 16,
        padding: 16,
        margin: 10,
        
        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    eventDate: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        width: 75
    },

    eventMonth: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },

    eventDay: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
    },

    eventInfo: {
        marginLeft: 15,
        justifyContent: "center"
    },

    eventName: {
        fontWeight: "bold",
        color: "white",
    },

    eventLocation: {
        color: "white",
    },

    eventTime: {
        color: "white",
    },

    eventButtons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },

    eventTitles: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
    },

    eventPress: {
        backgroundColor: "black",
        borderRadius: 12,
        width: 120,
        height: 40,
        marginBottom: 20,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,
    },

    rsvp: {
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 10,
        width: 100,
        margin: 10,
        padding: 4
    },

    eventsCard: {
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 16,
        padding: 10,
        margin: 10,
        height: 150,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    eventImage: {
        marginLeft: 10,
        borderRadius: 16,
        width: 150,
        height: 130
    },

    // ==================================================
    // MAP SCREEN AND MAP CONTROLS
    // ==================================================
    searchInput: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "rgba(52, 52, 52, 0.05)",
        width: 350,
        marginLeft: 20,
        marginBottom: 30,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    map: {
        width: "100%",
        height: 400,
        marginBottom: 30,
    },

    mapPress: {
        borderRadius: 16,
        backgroundColor: "black",
        width: 90,
        height: 40,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,
    },

    mapButtons: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 4
    },

    mapButtonText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },

    pressMap: {
        width: "100%",
    },

    viewMap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: "#D9B84B",
        borderRadius: 12,
        backgroundColor: "#FFFCF2",
    },

    // ==================================================
    // LOCATION CARDS AND FAVORITES
    // ==================================================
    locationCard: {
        backgroundColor: "black",
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        gap: 6,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,

    },

    locationHolder: {
        gap: 16
    },

    locationHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },

    locationImage: {
        width: 70,
        height: 70,
        borderRadius: 12,
    },

    locationInfo: {
        flex: 1,
        gap: 4,
        alignItems: "center"
    },

    favoriteStar: {
        padding: 4,
    },

    starIcon: {
        fontSize: 24,
        color: "#D6A400",
    },

    savedTabs: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
    },

    savedTop: {
        margin: "auto",
        marginBottom: 10
    },

    // ==================================================
    // DINING SCREEN
    // ==================================================
    diningCard: {
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 16,
        padding: 10,
        margin: 10,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    diningImage: {
        marginLeft: 10,
        borderRadius: 16,
        width: 150,
        height: 130
    },

    diningInfo: {
        marginLeft: 15,
        justifyContent: "center"
    },

    diningName: {
        fontWeight: "bold",
        color: "white",
    },

    diningTime: {
        color: "white",
    },

    diningLocation: {
        color: "white",
    },

    // ==================================================
    // SHUTTLE SCREEN
    // ==================================================
    shuttlePressable: {
        justifyContent: "center",
        flexDirection: "row",
        gap: 6
    },

    shuttlePress: {
        backgroundColor: "black",
        borderRadius: 16,
        width: 175,
        alignItems: "center",

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,
    },

    shuttleTitles: {
        marginTop: 40,
        padding: 10,
        marginLeft: 10,
    },

    shuttleText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        padding: 15
    },

    shuttleTabs: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
    },

    shuttleCard: {
        borderRadius: 16,
        backgroundColor: "black",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        margin: 10,
        height: 120,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    shuttleImage: {
        marginLeft: 10,
        width: 50,
        height: 50,
        padding: 10,
        margin: "auto"
    },

    shuttleInfo: {
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center"
    },

    shuttleName: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },

    shuttleDate: {
        color: "white",
        fontSize: 14,
    },

    shuttleTime: {
        color: "white",
        fontSize: 14,
    },

    liveTime: {
        alignItems: "center",
        justifyContent: "center",
    },

    liveText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },

    // ==================================================
    // NOTIFICATIONS SCREEN
    // ==================================================
    notifyTop: {
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        padding: 10,
        marginTop: 40,
        marginBottom: 20
    },

    notifyButtons: {
        gap: 4,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    notifyPress: {
        backgroundColor: "black",
        height: 50,
        width: 90,
        borderRadius: 16,
        margin: "auto",
        marginBottom: 20,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.12,
        shadowRadius: 6,

        // Andriod shadow
        elevation: 6,
    },

    notifyTabs: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
    },

    notifyCard: {
        borderRadius: 16,
        backgroundColor: "black",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        margin: 10,
        height: 100,
        alignItems: "center",

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    notifyImage: {
        marginLeft: 10,
        borderRadius: 12,
        width: 75,
        height: 75,
        padding: 10
    },

    notifyInfo: {
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center"
    },

    notifyName: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },

    notifyDescription: {
        color: "white",
        fontSize: 14,
    },

    notifyTime: {
        color: "white",
        fontSize: 14,
    },

    Marking: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },

    // ==================================================
    // PROFILE SCREEN
    // ==================================================
    profileBackground: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 10,
        gap: 10
    },

    profileImage: {
        height: 150,
        width: 150,
        backgroundColor: "black",
        borderRadius: 100,
        margin: 20
    },

    profileTabs: {
        gap: 5,
        margin: 10,
        marginBottom: 50
    },

    profileTab: {
        backgroundColor: "black",
        padding: 10,
        width: 300,
        margin: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 12,
        height: 50,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    logoutButton: {
        borderRadius: 12,
        backgroundColor: "black",
        width: 350,
        height: 50,
        margin: "auto",

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    // ==================================================
    // SETTINGS SCREEN
    // ==================================================
    settingsTabs: {
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
        marginBottom: 10
    },

    settingsTab: {
        backgroundColor: "black",
        padding: 10,
        width: 300,
        margin: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 12,
        height: 50,
        marginBottom: 10,

        // iOS shadow
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,

        // Andriod shadow
        elevation: 10,
    },

    settingsText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },

    settingsHolder: {
        margin: 15
    },

    settingsTop: {
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        padding: 10,
        marginTop: 40,
    },
});
