import { View, Text, StyleSheet } from "react-native";

export default MealDetails = ({ duration, complexity, affordability }) => {
	return (
		<View style={styles.details}>
			<Text style={styles.detailsText}>{duration}m ||</Text>
			<Text style={styles.detailsText}>{complexity.toUpperCase()} ||</Text>
			<Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
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
});
