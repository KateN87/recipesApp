import { createContext, useState } from "react";

export const FavouritesCtx = createContext({
	ids: [],
	addFavourite: () => {},
	removeFavourite: () => {},
});

const FavouritesCtxProvider = ({ children }) => {
	const [favouriteIds, setFavouriteIds] = useState([]);
	const addFavourite = (id) => {
		setFavouriteIds((prev) => [...prev, id]);
	};
	const removeFavourite = (id) => {
		setFavouriteIds((prev) => prev.filter((favouriteId) => favouriteId !== id));
	};

	const value = {
		ids: favouriteIds,
		addFavourite,
		removeFavourite,
	};

	return (
		<FavouritesCtx.Provider value={value}>{children}</FavouritesCtx.Provider>
	);
};

export default FavouritesCtxProvider;
