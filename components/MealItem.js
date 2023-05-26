import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import MealDetails from "./MealDetails";
export default MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	const pressHandler = () => {
		navigation.navigate("MealDetails", { mealId: id });
	};
	return (
		<View style={styles.container}>
			<Pressable
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				android_ripple={{ color: "pink" }}
				onPress={pressHandler}
			>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }} />
					<Text style={styles.title}>{title}</Text>
				</View>
				<MealDetails
					duration={duration}
					complexity={complexity}
					affordability={affordability}
				/>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "red",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	details: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	detailsText: {
		marginHorizontal: 4,
		fontSize: 16,
	},
	buttonPressed: {
		opacity: 0.5,
	},
});
