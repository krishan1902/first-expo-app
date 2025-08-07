import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={{headerTitle: "404: Not Found!"}} />
            <View style={styles.container}>
                <Link href={".."} style={styles.button}>Back to Home!</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#25292e",
    },
    button: {
        fontSize: 20,
        color: "#fff",
        textDecorationLine: "underline",
    },
});