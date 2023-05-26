import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useContext } from "react";
import MealDetails from "../components/MealDetails";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavouritesCtx } from "../store/context/FavouritesContext";

export default MealDetailsScreen = () => {
	const route = useRoute();
	const navigation = useNavigation();
	const favouritesMealCtx = useContext(FavouritesCtx);
	console.log(favouritesMealCtx);
	const { mealId } = route.params;
	const meal = MEALS.find((meal) => mealId === meal.id);
	const mealIsFavourite = favouritesMealCtx.ids.includes(mealId);

	const favouritesHandler = () => {
		if (mealIsFavourite) {
			favouritesMealCtx.removeFavourite(mealId);
		} else {
			favouritesMealCtx.addFavourite(mealId);
		}
	};

	//LayoutEffect körs efter att komponenten visats
	useLayoutEffect(() => {
		navigation.setOptions({
			title: meal.title,
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavourite ? "star" : "star-outline"}
						color='white'
						pressHandler={favouritesHandler}
					/>
				);
			},
		});
	}, [mealId, mealIsFavourite]);

	return (
		<ScrollView style={styles.container}>
			<Image style={styles.image} source={{ uri: meal.imageUrl }} />

			<Text style={styles.title}>{meal.title}</Text>
			<MealDetails
				duration={meal.duration}
				affordability={meal.affordability}
				complexity={meal.complexity}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listInnerContainer}>
					<Text style={styles.detailText}>Ingredients</Text>
					<List data={meal.ingredients} />
					<Text style={styles.detailText}>Steps</Text>
					<List data={meal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listInnerContainer: {
		width: "80%",
	},
	detailText: {
		color: "white",
		fontSize: 20,
	},
});
