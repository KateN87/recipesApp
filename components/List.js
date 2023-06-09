import { View, Text, StyleSheet } from "react-native";

export default List = ({ data }) => {
	return data.map((dataPoint, idx) => (
		<View style={styles.listItem} key={idx}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
};

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#e2b497",
	},
	itemText: {
		color: "#351401",
		textAlign: "center",
	},
});
