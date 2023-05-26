import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

export default MealsOverviewScreen = () => {
	const route = useRoute();
	const { categoryId } = route.params;
	const navigation = useNavigation();
	const category = CATEGORIES.find((cat) => cat.id === categoryId);

	useEffect(() => {
		if (category) {
			navigation.setOptions({ title: category.title });
		} else {
			navigation.setOptions({ title: "Unknown category" });
		}
	}, [categoryId]);

	const displayMeals = MEALS.filter((meal) =>
		meal.categoryIds.includes(categoryId)
	);

	const renderMealItem = (itemData) => {
		const meal = itemData.item;
		return <MealItem {...meal} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayMeals}
				renderItem={renderMealItem}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
