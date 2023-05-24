import { createContext, useState, useEffect } from "react";
import { fetchData } from "../utils/api";
export const context = createContext();
export const AppContext = (props) => {
	const [loading, setLoading] = useState(false);
	const [searchResults, setSearchResults] = useState(false);
	const [selectCategories, setSelectCategories] = useState(false);
	const [mobileView, setMobileView] = useState(false);

	useEffect(() => {
		fetchSelectCategoryData(selectCategories);
	}, [selectCategories]);

	const fetchSelectCategoryData = async (query) => {
		setLoading(true);
		await fetchData(`search/?q=${query}`).then(({ contents }) => {
			setSearchResults(contents);
			console.log(contents);
			setLoading(false);
		});
	};
	return (
		<context.Provider
			value={{
				loading,
				mobileView,
				searchResults,
				selectCategories,
				setLoading,
				setMobileView,
				setSearchResults,
				setSelectCategories,
			}}
		>
			{props.children}
		</context.Provider>
	);
};
