import { useRef, type ReactNode } from "react";
import {
    Animated,
    Pressable,
    StyleSheet,
    type StyleProp,
    type ViewStyle,
} from "react-native";

type AnimatedButtonProps = {
    children: ReactNode;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
};

export default function AnimatedButton({
    children,
    onPress,
    style,
}: AnimatedButtonProps) {
    const scale = useRef(new Animated.Value(1)).current;

    const animateTo = (value: number) => {
        Animated.spring(scale, {
            toValue: value,
            useNativeDriver: true,
            speed: 30,
            bounciness: 4,
        }).start();
    };

    return (
        <Animated.View
            style={{ transform: [{ scale }] }}
        >
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    style,
                    pressed && styles.pressedButton,
                ]}
                onPress={onPress}
                onPressIn={() => animateTo(0.96)}
                onPressOut={() => animateTo(1)}
            >
                {children}
            </Pressable>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    pressedButton: {
        backgroundColor: "#ffc629"
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
    },
});
