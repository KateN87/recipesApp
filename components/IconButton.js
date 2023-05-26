import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default IconButton = ({ icon, color, pressHandler }) => {
	return (
		<Pressable
			onPress={pressHandler}
			style={({ pressed }) => (pressed ? styles.pressed : null)}
		>
			<Ionicons name={icon} size={24} color={color} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});
