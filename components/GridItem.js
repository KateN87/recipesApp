import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default GridItem = ({ title, color, id }) => {
	const navigation = useNavigation();

	const pressHandler = () => {
		navigation.navigate("MealsOverview", { categoryId: id });
	};

	return (
		<View style={[styles.container, { backgroundColor: color }]}>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={pressHandler}
			>
				{/* <View style={styles.innerContainer}> */}
				<Text style={styles.title}>{title}</Text>
				{/* </View> */}
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		backgroundColor: "white",
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	innerContainer: {
		flex: 1,
		/* 		padding: 16,
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center", */
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
	buttonPressed: {
		opacity: 0.5,
	},
});
