import { FlatList, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";

export default CategoriesScreen = () => {
	const renderGridItem = (itemData) => {
		const category = itemData.item;
		return (
			<GridItem
				{...category}
				/* id={category.id}
				title={category.title}
				color={category.color} */
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderGridItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	);
};
