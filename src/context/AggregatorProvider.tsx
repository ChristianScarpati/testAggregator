import React, { createContext, useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks";

import { GuardianInterface, WallStreetInterface, NYTimesInterface, FilterDateType } from "../types";
import { cleanGuardianData, cleanNYTimesData, cleanWallStreetData } from "../api/utils/Cleaners";

import { NormalizedData, aggregateData } from "../api/utils";
import { isToday, isSameMonth, isSameWeek } from "../utils";
import { fetchJsonData } from "../api/sources/FetcherJsonData";

export const AggregatorContext = createContext({
	combinedArticlesData: [] as NormalizedData[],
	searchArticles: "",
	setSearchArticles: (_search: string) => {},
	searchArticlesDataByTitle: [] as NormalizedData[],

	// filters
	filterByDate: "",
	setFilterByDate: (_date: string) => {},
	filterBySource: "",
	setFilterBySource: (_source: string) => {},
	filterByCategory: "",
	setFilterByCategory: (_category: string) => {},

	// handle filters
	handleFilterBySource: (_source: string) => {},
	handleFilterByDate: (_date: string) => {},
});

export const AggregatorProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [combinedArticlesData, setCombinedArticlesData] = useState<NormalizedData[]>([]);
	const [initialCombinedArticles, setInitialCombinedArticles] = useState<NormalizedData[]>([]);
	const [searchArticles, setSearchArticles] = useState<string>("");

	const [filterByDate, setFilterByDate] = useState("");
	const [filterBySource, setFilterBySource] = useState("");
	const [filterByCategory, setFilterByCategory] = useState("");

	//! wallStreets Journal API asks us to get a payed plan to use it.
	// const wallStreetsFetchedData = useFetch<WallStreetInterface>(
	// 	"https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ec78c4bd3094eb686fc5446c093df92"
	// );

	const nyTimesFetchedData = useFetch<NYTimesInterface>(
		"https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=RLy5aTRHoEqEhWWKDqv06X4GNLHKsovt"
	);

	const guardianFetchedData = useFetch<GuardianInterface>(
		"https://content.guardianapis.com/search?order-by=newest&show-fields=thumbnail&api-key=ba67e439-5520-463a-98ac-5f19a1a4622b"
	);
	
	//!  use fetcherJsonData for guardian instead useFetch to retrieve the data because Guardian Journal API asks us to get a payed plan to use it.
	const wallStreetFetchedData = fetchJsonData("NewsApi-WallStreet-Journal");

	useEffect(() => {
		const transformDataApi = async () => {
			try {
				const [guardianResponse, wallStreetResponse, nyTimesResponse] = await Promise.all([
					guardianFetchedData,
					wallStreetFetchedData as Promise<WallStreetInterface>,
					nyTimesFetchedData,
				]);

				if (guardianFetchedData.isError || nyTimesResponse.isError) {
					throw new Error("Failed to fetch data from one or more sources.");
				}

				const cleanedGuardianData = cleanGuardianData(guardianResponse.data.response);
				const cleanedWallStreetData = cleanWallStreetData(wallStreetResponse);
				const cleanedNYTimesData = cleanNYTimesData(nyTimesResponse.data);

				const normalizeData = aggregateData(
					cleanedGuardianData,
					cleanedWallStreetData,
					cleanedNYTimesData
				);

				setCombinedArticlesData(normalizeData);
				setInitialCombinedArticles(normalizeData);
			} catch (error) {
				console.error("Error loading the data.");
			}
		};
		transformDataApi();
	}, [guardianFetchedData.data, nyTimesFetchedData.data]);

	const searchArticlesDataByTitle = combinedArticlesData.filter((article) => {
		const articleTitleToLowerCase = article.title.toLowerCase();
		const searchText = searchArticles.toLowerCase();

		const includeProductName = articleTitleToLowerCase.includes(searchText);
		return includeProductName;
	});

	const handleFilterByDate = useCallback(
		(filterType: string) => {
			const currentDate = new Date();
			const filterByDate = initialCombinedArticles.filter((article) => {
				const articleDate = new Date(article.publishedAt);
				switch (filterType) {
					case FilterDateType.Today:
						return isToday(articleDate);
					case FilterDateType.ThisWeek:
						return isSameWeek(articleDate, currentDate);
					case FilterDateType.ThisMonth:
						return isSameMonth(articleDate, currentDate);
					default:
						return true;
				}
			});
			setCombinedArticlesData(filterByDate);
		},
		[initialCombinedArticles, setCombinedArticlesData]
	);

	const handleFilterBySource = useCallback(
		(source: string) => {
			const filterBySource = initialCombinedArticles.filter((article) => {
				const articleSource = article.source.toLowerCase();
				const searchText = source.toLowerCase();

				const includeProductName = articleSource.includes(searchText);
				return includeProductName;
			});
			setCombinedArticlesData(filterBySource);
		},

		[combinedArticlesData, initialCombinedArticles]
	);

	return (
		<AggregatorContext.Provider
			value={{
				combinedArticlesData,
				searchArticles,
				setSearchArticles,

				searchArticlesDataByTitle,

				filterByDate,
				setFilterByDate,
				filterBySource,
				setFilterBySource,
				filterByCategory,
				setFilterByCategory,

				handleFilterByDate,
				handleFilterBySource,
			}}
		>
			{children}
		</AggregatorContext.Provider>
	);
};

export default AggregatorProvider;
