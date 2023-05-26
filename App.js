import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Dimensions, Button, ScrollView } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouritesCtxProvider from "./store/context/FavouritesContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "#6a6969",
	},
};

const DrawerItems = ({ navigation }) => {
	const pressHandler = (title) => {
		navigation.navigate(title);
	};

	return (
		<ScrollView style={styles.drawer}>
			<Button
				title='Categories'
				color='#c95858'
				onPress={() => pressHandler("Categories")}
			/>
			<Button
				title='Favourites'
				color='#c95858'
				onPress={() => pressHandler("Favourites")}
			/>
		</ScrollView>
	);
};

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <DrawerItems {...props} />}
			screenOptions={{
				drawerStyle: {
					width: Dimensions.get("screen").width,
				},
				headerStyle: { backgroundColor: "#7458c9" },
				headerTintColor: "white",
				sceneContainerStyle: {
					backgroundColor: "#6a6969",
				},
			}}
		>
			<Drawer.Screen name='Categories' component={CategoriesScreen} />
			<Drawer.Screen name='Favourites' component={FavouriteScreen} />
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<FavouritesCtxProvider>
				<NavigationContainer theme={Theme}>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#7458c9" },
							headerTintColor: "white",
						}}
					>
						<Stack.Screen
							name='Drawer'
							component={DrawerNavigator}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name='MealsOverview'
							component={MealsOverviewScreen}
						/>
						<Stack.Screen name='MealDetails' component={MealDetailsScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</FavouritesCtxProvider>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
	drawer: {
		backgroundColor: "white",
		marginTop: 30,
	},
});
